/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';

import { AVATAR_COLOR } from '../../avatar/Avatar';
import TodoCommentTemplate from '../todoCommentTemplate/TodoCommentTemplate';

export default function TodoCommentsListItem ({ comment, index, isLast }) {
  return (
      <TodoCommentTemplate
          disableBorderBottom={isLast}
          AvatarProps={{
            color: index % 2 ? AVATAR_COLOR.BLUE : AVATAR_COLOR.ORANGE
          }}
      >
        {comment}
      </TodoCommentTemplate>
  );
}

TodoCommentsListItem.propTypes = {
  comment: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool
};