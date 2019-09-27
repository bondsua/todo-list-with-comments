/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import './AddTodo.css';
import ActionButton from '../../buttons/actionButton/ActionButton';

export default class AddTodo extends PureComponent {
  state = {
    name: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;

    this.props.onSubmit && this.props.onSubmit(name);
    this.setState({
      name: ''
    });
  };

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  render () {
    const { className } = this.props;
    const { t } = this.context;
    const { name } = this.state;

    return (
        <form onSubmit={this.onSubmit}
              className={classNames('AddTodo', className)}>
          <TextField
              className='AddTodo_input'
              fullWidth
              label={`${t('Type name here')}...`}
              variant="outlined"
              onChange={this.onChangeName}
              value={name}
          />
          <ActionButton
              className='AddTodo_submit-button' type='submit'
              disabled={!Boolean(name)}
          >
            {t('Add new')}
          </ActionButton>
        </form>
    );
  }
}

AddTodo.propTypes = {
  onSubmit: PropTypes.func
};

AddTodo.contextTypes = {
  t: PropTypes.func
};
