import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import { store, persistor } from './store';
import IntlProvider from './containers/intl/IntlProvider';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider>
          <App />
        </IntlProvider>
      </PersistGate>
    </Provider>
    , document.getElementById('root'));