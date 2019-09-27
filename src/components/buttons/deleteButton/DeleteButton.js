/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import { Button } from '@material-ui/core';
import classNames from 'classnames';

import './DeleteButton.css';

export default function DeleteButton ({ className, ...restProps }) {
  return <Button
      {...restProps}
      variant="outlined"
      color="secondary"
      className={classNames('DeleteButton', className)}
  />;
}