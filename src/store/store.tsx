import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer } from './userReducer';
import { persistReducer, persistStore } from "redux-persist";
import storage from "@react-native-async-storage/async-storage";
import { thunk } from 'redux-thunk';

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    user: userReducer,
    userData: () => persistReducer(persistConfig, userReducer)
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
export default store;
