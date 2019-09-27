/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './Sidebar.css';
import {
  selectors as appSelectors,
  actions as appActions
} from '../../store/app';
import LanguageSelect from '../../components/languageSelect/LanguageSelect.js';

class Sidebar extends PureComponent {
  onChangeLanguage = (language) => {
    const { currentLanguage, dispatch } = this.props;

    if (currentLanguage === language) {
      return;
    }

    dispatch(appActions.setLanguage(language));
  };

  render () {
    return <aside className={classNames('Sidebar', this.props.className)}>
      <div className='Sidebar_logo'>
        Todo
      </div>
      <div className='Sidebar_language'>
        <LanguageSelect
            onChangeLanguage={this.onChangeLanguage}
        />
      </div>
    </aside>;
  }
}

const mapStateToProps = state => {
  return {
    currentLanguage: appSelectors.getLanguage(state)
  };
};

export default connect(mapStateToProps)(Sidebar);