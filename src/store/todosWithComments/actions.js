/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import { ACTIONS_TYPE } from './constants';

export function addTodo (name) {
  return {
    type: ACTIONS_TYPE.ADD_TODO,
    payload: {
      name,
      comments: []
    }
  };
}

export function deleteTodoByIndex (index) {
  return {
    type: ACTIONS_TYPE.DELETE_TODO_BY_INDEX,
    payload: index
  };
}

export function setCurrentTodoIndex (index) {
  return {
    type: ACTIONS_TYPE.SET_CURRENT_TODO_INDEX,
    payload: index
  };
}

export function addCommentToTodo ({todoIndex, comment}) {
  return {
    type: ACTIONS_TYPE.ADD_COMMENT_TO_TODO,
    payload: {
      todoIndex,
      comment
    }
  };
}