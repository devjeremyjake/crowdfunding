import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as UserAvatar } from '../../assets/user-circle.svg';
import { Avatar } from './user-logo.style';
import { toggleMenuHidden } from '../../redux/menu/menu.actions';
const UserLogo = ({ toggleMenuHidden }) => {
	return (
		<Avatar onClick={toggleMenuHidden}>
			<UserAvatar />
		</Avatar>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleMenuHidden: () => dispatch(toggleMenuHidden()),
});

export default connect(null, mapDispatchToProps)(UserLogo);
