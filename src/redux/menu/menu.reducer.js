import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
	hidden: true,
	currentUser: null,
};

const menuReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MenuActionTypes.TOGGLE_MENU_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case MenuActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default menuReducer;
