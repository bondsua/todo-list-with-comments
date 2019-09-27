/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactCountryFlag from 'react-country-flag';
import { ListItemIcon, ListItemText, MenuItem } from '@material-ui/core';

import './LanguageSelectItem.css';

class LanguageSelectItem extends React.Component {
  render () {
    const { countryLang, countryCode, countryName, onChange, forwardedRef } = this.props;

    const onClick = (e) => {
      onChange(e, countryLang);
    };

    return (
        <MenuItem
            ref={forwardedRef}
            className='LanguageSelectItem'
            onClick={onClick}
        >
          <ListItemIcon className='LanguageSelectItem_lang'>
          <span className='LanguageSelectItem_text'>
            {countryLang}
          </span>
          </ListItemIcon>
          <ReactCountryFlag
              className='LanguageSelectItem_flag'
              code={countryCode}
              styleProps={{}}
          />
          <ListItemText
              primaryTypographyProps={{ className: 'LanguageSelectItem_text' }}
              primary={countryName}
          />
        </MenuItem>
    );
  }
}

LanguageSelectItem.propTypes = {
  countryLang: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default React.forwardRef(
    (props, ref) => <LanguageSelectItem {...props} forwardedRef={ref} />
);