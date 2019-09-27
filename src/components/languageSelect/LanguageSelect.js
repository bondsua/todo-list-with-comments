/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@material-ui/core';

import './LanguageSelect.css';
import LanguageSelectItem from './languageSelectItem/LanguageSelectItem';
import EarthIcon from '../icons/EarthIcon';
import ActionButton from '../buttons/actionButton/ActionButton';

const COUNTRY_SUPPORT = [
  {
    lang: 'en',
    code: 'US',
    name: 'English'
  },
  {
    lang: 'ru',
    code: 'RU',
    name: 'Русский'
  },
  {
    lang: 'pl',
    code: 'PL',
    name: 'Polski'
  },
  {
    lang: 'fr',
    code: 'FR',
    name: 'Le français'
  }
];
export default function LanguageSelect (props, context) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { t } = context;

  const onShowMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = (e, code) => {
    const { onChangeLanguage } = props;
    setAnchorEl(null);
    code && onChangeLanguage(code);
  };

  return <div>
    <ActionButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={onShowMenu}
    >
      <EarthIcon className='LanguageSelect_earth' />
      {t('Languages')}
    </ActionButton>
    <Menu
        classes={{
          paper: 'LanguageSelect_menu'
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onCloseMenu}
    >
      {COUNTRY_SUPPORT.map(({ lang, code, name }) => (
          <LanguageSelectItem
              key={code}
              countryLang={lang}
              countryCode={code}
              countryName={name}
              onChange={onCloseMenu}
          />
      ))}
    </Menu>
  </div>;
}

LanguageSelect.propTypes = {
  onChangeLanguage: PropTypes.func
};

LanguageSelect.contextTypes = {
  t: PropTypes.func
};