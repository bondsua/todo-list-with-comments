/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@material-ui/core';

import './AddTodoComment.css';
import TodoCommentTemplate from '../todoCommentTemplate/TodoCommentTemplate';
import ActionButton from '../../buttons/actionButton/ActionButton';

export default class AddTodoComment extends PureComponent {
  state = {
    comment: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { comment } = this.state;

    this.props.onSubmit && this.props.onSubmit(comment);
    this.setState({
      comment: ''
    });
  };

  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value
    });
  };

  render () {
    const { comment } = this.state;
    const { t } = this.context;
    const { className } = this.props;

    return (
        <TodoCommentTemplate
            component='div'
            disableGutters
            disableBorderBottom
            className={className}
        >
          <form onSubmit={this.onSubmit} className='AddTodoComment'>
            <TextareaAutosize
                rows={4}
                value={comment}
                onChange={this.onChangeComment}
                className='AddTodoComment_textarea'
            />
            <ActionButton
                type='submit'
                disabled={!Boolean(comment)}
                className='AddTodoComment_submit-button'
            >
              {t('Add new')}
            </ActionButton>
          </form>
        </TodoCommentTemplate>
    );
  }
}

AddTodoComment.propTypes = {
  onSubmit: PropTypes.func
};

AddTodoComment.contextTypes = {
  t: PropTypes.func
};
