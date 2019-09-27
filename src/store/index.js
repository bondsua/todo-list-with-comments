/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import { SCOPE as TODOS_SCOPE } from './todosWithComments';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [TODOS_SCOPE]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancer = process.env.NODE_ENV === 'development' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      maxAge: 30,
      latency: 1000,
      shouldHotReload: false
    })
    : compose;

const store = createStore(persistedReducer, undefined, composeEnhancer());
let persistor = persistStore(store);

export {
  store,
  persistor
};
