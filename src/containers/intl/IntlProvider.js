/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import { connect } from 'react-redux';
import I18n from 'redux-i18n';
import React from 'react';

import { selectors as appSelectors } from '../../store/app';
import translations from '../../translations';

function IntlProvider ({ language, children }) {
  return <I18n translations={translations} initialLang={language}>
    {children}
  </I18n>;
}

const mapStateToProps = state => {
  return {
    language: appSelectors.getLanguage(state)
  };
};

export default connect(mapStateToProps)(IntlProvider);