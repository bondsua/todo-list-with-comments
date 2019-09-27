/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import './TodoCommentTemplate.css';
import Avatar from '../../avatar/Avatar';

export default function TodoCommentsTemplate ({
  children,
  className,
  disableGutters,
  disableBorderBottom,
  AvatarProps,
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
        <ListItemIcon className='TodoCommentTemplate_avatar'>
          <Avatar {...AvatarProps} />
        </ListItemIcon>
        <ListItemText className='TodoCommentTemplate_text'>
          {children || null}
        </ListItemText>
      </ListItem>
  );
}

TodoCommentsTemplate.propTypes = {
  disableGutters: PropTypes.bool,
  disableBorderBottom: PropTypes.bool,
  AvatarProps: PropTypes.object
};

TodoCommentsTemplate.defaultProps = {
  disableGutters: false,
  disableBorderBottom: false
};
