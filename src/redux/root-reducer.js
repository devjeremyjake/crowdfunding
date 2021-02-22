import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import menuReducer from './menu/menu.reducer';
import ProjectsReducer from './projects/projects.reducer.js';

const rootReducer = combineReducers({
	menu: menuReducer,
	project: ProjectsReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whiteList: [],
};

export default persistReducer(persistConfig, rootReducer);
