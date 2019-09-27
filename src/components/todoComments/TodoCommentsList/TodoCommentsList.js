/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';

import './TodoCommentsList.css'
import TodoCommentsListItem from '../todoCommentsListItem/TodoCommentsListItem';

export default function TodoCommentsList ({ comments }) {
  const lastCommentIndex = comments.length - 1;

  return (
      <List className='TodoCommentsList'>
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

TodoCommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};