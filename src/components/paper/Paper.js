/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React from 'react';
import { Paper as PaperUI, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Paper.css';

export default function Paper (props) {
  const { header, children, ...restProps } = props;

  return <PaperUI
      {...restProps}
      classes={{ root: 'Paper' }}
  >
    {header && (
        <Typography variant='h4' className='Paper_header'>
          {header}
        </Typography>
    )}
    {children || null}
  </PaperUI>;
}

Paper.propTypes = {
  header: PropTypes.string
};