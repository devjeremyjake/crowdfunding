import { createStore } from 'redux';
import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectMenuHidden = createSelector(
	[selectMenu],
	(cart) => cart.hidden
);
