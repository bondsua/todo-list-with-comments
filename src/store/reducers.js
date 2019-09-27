/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';

import { SCOPE as TODOS_SCOPE, reducer as todosReducer } from './todosWithComments';

export default combineReducers({
  i18nState,
  [TODOS_SCOPE]: todosReducer
});
