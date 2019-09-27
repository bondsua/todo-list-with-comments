/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */

export const SCOPE = 'TODOS';

export const ACTIONS_TYPE = {
  ADD_TODO: `${SCOPE}/ADD_TODO`,
  DELETE_TODO_BY_INDEX: `${SCOPE}/DELETE_TODO_BY_INDEX`,
  SET_CURRENT_TODO_INDEX: `${SCOPE}/SET_CURRENT_TODO_INDEX`,
  ADD_COMMENT_TO_TODO: `${SCOPE}/ADD_COMMENT_TO_TODO`
};