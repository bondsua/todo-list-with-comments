/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import { SCOPE } from './constants';

export const getTodos = (state) => state[SCOPE].todos;
export const getCurrentTodoIndex = (state) => state[SCOPE].currentTodoIndex;
export const getCurrentTodo = (state) => {
  return getTodos(state)[getCurrentTodoIndex(state)] || null;
};