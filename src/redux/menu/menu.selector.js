import { createStore } from 'redux';
import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectMenuHidden = createSelector(
	[selectMenu],
	(menu) => menu.hidden
);

export const selectCurrentUser = createSelector(
	[selectMenu],
	(user) => user.currentUser
);
