/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Todos.css';
import {
  selectors as todosSelectors,
  actions as todosActions
} from '../../store/todosWithComments';
import Paper from '../../components/paper/Paper';
import TodoList from '../../components/todos/todoList/TodoList';
import AddTodo from '../../components/todos/addTodo/AddTodo';

const TodoActionContext = React.createContext({
  onDeleteTodoByIndex: () => {
  },
  onActivateTodoIndex: () => {
  }
});

class Todos extends PureComponent {
  onAddTodo = (name) => {
    const { dispatch } = this.props;

    dispatch(todosActions.addTodo(name));
  };

  onDeleteTodoByIndex = (index) => {
    const { dispatch } = this.props;

    dispatch(todosActions.deleteTodoByIndex(index));
  };

  onActivateTodoIndex = (index) => {
    const { dispatch } = this.props;

    dispatch(todosActions.setCurrentTodoIndex(index));
  };

  render () {
    const { todos, currentTodoIndex } = this.props;
    const { t } = this.context;

    return (
        <Paper
            square
            header={t('Todo')}
        >
          <AddTodo
              className='Todos_add'
              onSubmit={this.onAddTodo}
          />
          <TodoActionContext.Provider value={{
            onDeleteTodoByIndex: this.onDeleteTodoByIndex,
            onActivateTodoIndex: this.onActivateTodoIndex
          }}>
            <TodoList
                todos={todos}
                className='Todos_list'
                currentTodoIndex={currentTodoIndex}
            />
          </TodoActionContext.Provider>
        </Paper>
    );
  }
}

Todos.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    todos: todosSelectors.getTodos(state),
    currentTodoIndex: todosSelectors.getCurrentTodoIndex(state)
  };
};

export default connect(mapStateToProps)(Todos);

export {
  TodoActionContext
};