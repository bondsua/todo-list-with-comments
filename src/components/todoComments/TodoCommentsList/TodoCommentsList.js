/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';

import './TodoCommentsList.css';
import TodoCommentsListItem from '../todoCommentsListItem/TodoCommentsListItem';

export default class TodoCommentsList extends PureComponent {
  commentsRef = React.createRef();

  componentDidUpdate (prevProps) {
    if (this.props.comments.length > prevProps.comments.length) {
      this.commentsRef.current.scrollTop = this.commentsRef.current.scrollHeight;
    }
  }

  render () {
    const { comments } = this.props;
    const lastCommentIndex = comments.length - 1;

    return (
        <List className='TodoCommentsList' ref={this.commentsRef}>
          {comments.map((comment, index) => {
            return <TodoCommentsListItem
                key={index}
                isLast={index === lastCommentIndex}
                comment={comment}
                index={index}
            />;
          })}
        </List>
    );
  }
}

TodoCommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};