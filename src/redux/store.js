import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSage from './root-saga';

const sagaMiddleWare = createSageMiddleware();

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(rootSage);

export const persistor = persistStore(store);
