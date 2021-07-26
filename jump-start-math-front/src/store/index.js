import { createStore, combineReducers } from 'redux';
import usuarioReducer from './usuarioReducer';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'JumpStartMath',
    storage,
}

const rootReducer = combineReducers({
    usuario: usuarioReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export {store, persistor};