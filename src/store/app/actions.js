/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import { setLanguage as setLanguageI18 } from 'redux-i18n';
import Cookies from 'js-cookie';

import { LANGUAGE } from '../../constants/cookies';

const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);

export function setLanguage (lang) {
  Cookies.set(LANGUAGE, lang, {
    expires: inOneHour,
    path: '/'
  });

  return setLanguageI18(lang);
}