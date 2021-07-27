import { createStore, combineReducers } from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import User from './user';

const persistConfig = { key: 'JumpStartMath', storage };
const rootReducer = combineReducers({ User });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
