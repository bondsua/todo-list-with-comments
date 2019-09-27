/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import Cookie from 'js-cookie';

import { LANGUAGE } from '../../constants/cookies';

export const getLanguage = (state) => Cookie.get(LANGUAGE) || state.i18nState.lang;