/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TodoList.css'
import TodoListItem from './todoListItem/TodoListItem';
import { TodoActionContext } from '../../../containers/todos/Todos';

export default class TodoList extends PureComponent {
  todosRef = React.createRef();

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.todos.length > prevProps.todos.length) {
      this.todosRef.current.scrollTop = this.todosRef.current.scrollHeight;
    }
  }

  render () {
    const { todos, currentTodoIndex, className } = this.props;

    return (
        <div
            ref={this.todosRef}
            className={classNames('TodoList', className)}
        >
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
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
  ).isRequired,
  currentTodoIndex: PropTypes.number
};