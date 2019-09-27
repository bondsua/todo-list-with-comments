/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TodoListItem from './todoListItem/TodoListItem';
import { TodoActionContext } from '../../../containers/todos/Todos';

export default function TodoList ({ todos, currentTodoIndex, className }) {
  return (
      <div className={classNames('TodoList', className)}>
        <TodoActionContext.Consumer>
          {({ onDeleteTodoByIndex, onActivateTodoIndex }) => (
              todos.map(
                  (todo, index) => <TodoListItem
                      key={index}
                      name={todo.name}
                      isActive={currentTodoIndex === index}
                      todoIndex={index}
                      onDelete={onDeleteTodoByIndex}
                      onActivate={onActivateTodoIndex}
                      countComments={todo.comments.length}
                  />
              )
          )}
        </TodoActionContext.Consumer>
      </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
  ).isRequired,
  currentTodoIndex: PropTypes.number
};