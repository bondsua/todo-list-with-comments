import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import './App.css';
import mainTheme from './theme/main';
import SideBar from './containers/sidebar/Sidebar';
import Todos from './containers/todos/Todos';
import TodoComments from './containers/todoComments/TodoComments';

function App () {
  return (
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={mainTheme}>
          <div className="App">
            <SideBar className='App_side-bar' />
            <Grid container spacing={8} className='App_content'>
              <Grid item sm className='App_content_paper'>
                <Todos />
              </Grid>
              <Grid item sm className='App_content_paper'>
                <TodoComments />
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </StylesProvider>
  );
}

export default App;
