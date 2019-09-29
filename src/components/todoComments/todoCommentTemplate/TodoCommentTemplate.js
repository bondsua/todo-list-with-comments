/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import './TodoCommentTemplate.css';

export default function TodoCommentsTemplate ({
  children,
  className,
  disableGutters,
  disableBorderBottom,
  avatar,
  ...restProps
}) {
  return (
      <ListItem
          {...restProps}
          disableGutters
          className={classNames('TodoCommentTemplate', className, {
            'TodoCommentTemplate__gutters': !disableGutters,
            'TodoCommentTemplate__border-bottom': !disableBorderBottom
          })}
      >
        {avatar && (
            <ListItemIcon className='TodoCommentTemplate_avatar'>
              {avatar}
            </ListItemIcon>
        )}
        <ListItemText className='TodoCommentTemplate_text'>
          {children || null}
        </ListItemText>
      </ListItem>
  );
}

TodoCommentsTemplate.propTypes = {
  disableGutters: PropTypes.bool,
  disableBorderBottom: PropTypes.bool,
  avatar: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ])
};

TodoCommentsTemplate.defaultProps = {
  disableGutters: false,
  disableBorderBottom: false
};
