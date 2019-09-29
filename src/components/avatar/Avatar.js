/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Avatar.css';

const AVATAR_COLOR = {
  GREY: 'GREY',
  BLUE: 'BLUE',
  ORANGE: 'ORANGE'
};

export default function Avatar ({ className, color, ...respProps }) {
  return <span {...respProps}
               className={classNames('Avatar', className, {
                 'Avatar__grey': color === AVATAR_COLOR.GREY,
                 'Avatar__blue': color === AVATAR_COLOR.BLUE,
                 'Avatar__orange': color === AVATAR_COLOR.ORANGE
               })} />;
}

Avatar.propTypes = {
  color: PropTypes.oneOf(Object.values(AVATAR_COLOR))
};

Avatar.defaultProps = {
  color: AVATAR_COLOR.GREY
};

export {
  AVATAR_COLOR
};