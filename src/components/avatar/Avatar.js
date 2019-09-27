/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import classNames from 'classnames';

import './Avatar.css';

const AVATAR_COLOR = {
  GREY: 'GREY',
  BLUE: 'BLUE',
  ORANGE: 'ORANGE'
};

export default function Avatar ({ className, color, ...respProps }) {
  return <span {...respProps}
               className={classNames('Avatar', className, {
                 'Avatar__blue': color === AVATAR_COLOR.BLUE,
                 'Avatar__orange': color === AVATAR_COLOR.ORANGE
               })} />;
}

export {
  AVATAR_COLOR
};