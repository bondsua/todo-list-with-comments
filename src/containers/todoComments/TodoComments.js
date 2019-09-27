/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './TodoComments.css';
import {
  selectors as todosSelector,
  actions as todosActions
} from '../../store/todosWithComments';
import Paper from '../../components/paper/Paper';
import AddTodoComment
  from '../../components/todoComments/addTodoComment/AddTodoComment';
import TodoCommentsList
  from '../../components/todoComments/TodoCommentsList/TodoCommentsList';

class TodoComments extends PureComponent {
  render () {
    const { currentTodo } = this.props;
    const { t } = this.context;

    return (
        <Paper
            square
            header={currentTodo &&
            t('Comments for {todo}', { todo: currentTodo.name })}
        >
          {this.renderComments()}
        </Paper>
    );
  }

  onAddComment = (comment) => {
    const { dispatch, currentTodoIndex } = this.props;

    dispatch(todosActions.addCommentToTodo({
      todoIndex: currentTodoIndex,
      comment
    }));
  };

  renderComments () {
    const { currentTodo } = this.props;
    const { t } = this.context;

    if (!currentTodo) {
      return <Typography>
        {t('No todo selected')}
      </Typography>;
    }

    return (
        <div>
          <TodoCommentsList comments={currentTodo.comments} />
          <AddTodoComment
              onSubmit={this.onAddComment}
              className='TodoComments_add-comment'
          />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTodo: todosSelector.getCurrentTodo(state),
    currentTodoIndex: todosSelector.getCurrentTodoIndex(state)
  };
};

TodoComments.contextTypes = {
  t: PropTypes.func
};

export default connect(mapStateToProps)(TodoComments);