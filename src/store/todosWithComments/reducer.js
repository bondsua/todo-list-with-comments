/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import { ACTIONS_TYPE } from './constants';

const initialState = {
  currentTodoIndex: 0,
  todos: []
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPE.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      };

    case ACTIONS_TYPE.DELETE_TODO_BY_INDEX: {
      const removeIndex = action.payload;
      if (removeIndex < 0) {
        return state;
      }

      let currentTodoIndex = state.currentTodoIndex;
      state.todos.splice(removeIndex, 1);

      if (removeIndex >= currentTodoIndex) {
        currentTodoIndex = Math.min(currentTodoIndex, state.todos.length - 1);
        currentTodoIndex = Math.max(0, currentTodoIndex);
      } else {
        currentTodoIndex = Math.max(0, currentTodoIndex - 1);
      }

      return {
        ...state,
        currentTodoIndex,
        todos: [
          ...state.todos
        ]
      };
    }

    case ACTIONS_TYPE.SET_CURRENT_TODO_INDEX:
      return {
        ...state,
        currentTodoIndex: action.payload
      };

    case ACTIONS_TYPE.ADD_COMMENT_TO_TODO: {
      const { todoIndex, comment } = action.payload;

      if (!state.todos[todoIndex]) {
        return state;
      }

      state.todos[todoIndex] = {
        ...state.todos[todoIndex],
        comments: [
          ...state.todos[todoIndex].comments,
          comment
        ]
      };

      return {
        ...state,
        todos: [
            ...state.todos
        ]
      };
    }

    default:
      return state;
  }
}