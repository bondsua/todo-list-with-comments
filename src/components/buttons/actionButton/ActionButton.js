/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import { Button } from '@material-ui/core';

import './ActionButton.css';

export default function ActionButton (props) {
  return <Button
      {...props}
      color="primary"
      variant="contained"
      classes={{
        root: 'ActionButton'
      }}
  />;
}