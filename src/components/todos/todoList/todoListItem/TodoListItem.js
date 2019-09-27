/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography, Badge } from '@material-ui/core';

import './TodoListItem.css';
import DeleteButton from '../../../buttons/deleteButton/DeleteButton';

export default function TodoListItem (
    { name, countComments, todoIndex, onDelete, onActivate, isActive },
    context
) {
  const { t } = context;

  const onDeleteTodoByIndex = () => {
    onDelete && onDelete(todoIndex);
  };

  const onActivateTodoIndex = () => {
    onActivate && onActivate(todoIndex);
  };

  return (
      <div className={classNames('TodoListItem', {
        'TodoListItem__active': isActive
      })}>
        <Typography
            className='TodoListItem_content'
            onClick={onActivateTodoIndex}
        >
          <span className='TodoListItem_content_name'>
            {name}
          </span>
          <Badge
              classes={{
                badge: 'TodoListItem_content_count'
              }}
              type='primary'
              invisible={false}
              badgeContent={countComments}
              color="primary"
          />
        </Typography>
        <div className='TodoListItem_actions'>
          <DeleteButton onClick={onDeleteTodoByIndex}>
            {t('Delete')}
          </DeleteButton>
        </div>
      </div>
  );
}

TodoListItem.propTypes = {
  todoIndex: PropTypes.number,
  name: PropTypes.string,
  countComments: PropTypes.number,
  onDelete: PropTypes.func,
  onActivate: PropTypes.func,
  isActive: PropTypes.bool
};

TodoListItem.contextTypes = {
  t: PropTypes.func
};