import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import menuReducer from './menu/menu.reducer';

const rootReducer = combineReducers({
	menu: menuReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whiteList: [],
};

export default persistReducer(persistConfig, rootReducer);
