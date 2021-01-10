import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import storage from 'redux-persist/lib/storage';

//importing reducer
import rootReducer from '../Reducer';

// importing root saga
import rootSaga from '../Saga';

// Local storage name for persist
const LOCAL_STORAGE_NAME: string = 'Sample App';

// Redux persist setup
const persistConfig = {
    key: LOCAL_STORAGE_NAME,
    storage,
    stateReconciler: hardSet,
};

// adding persist to the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

// creating store and applying the middleware
const store = createStore(
    persistedReducer,
    applyMiddleware(
        sagaMiddleware,
        createLogger(),
    )
);

const persistor = persistStore(store);
persistor.persist();
sagaMiddleware.run(rootSaga);

export {
    store,
    persistor
}