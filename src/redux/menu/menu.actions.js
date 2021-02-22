import MenuActionTypes from './menu.types';

export const toggleMenuHidden = () => ({
	type: MenuActionTypes.TOGGLE_MENU_HIDDEN,
});

export const setCurrentUser = (user) => ({
	type: MenuActionTypes.SET_CURRENT_USER,
	payload: user,
});
