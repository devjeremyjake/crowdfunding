import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import DropDown from '../dropdown/dropdown.component';
import UserLogo from '../user-logo/user-logo.component';
import {
	HeaderContainer,
	LogoContainer,
	MenuContainer,
	OptionLink,
	OptionDisplay,
} from './Header.style';

import {
	selectMenuHidden,
	selectCurrentUser,
} from '../../redux/menu/menu.selector';

const Header = ({ hidden, currentUser }) => {
	return (
		<HeaderContainer bgColor>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<MenuContainer>
				<OptionLink to="/about">About</OptionLink>
				<OptionLink to="/funding">Discover</OptionLink>
				{currentUser ? (
					<OptionDisplay>{currentUser.displayName}</OptionDisplay>
				) : (
					<OptionLink to="/signIn">Get Started</OptionLink>
				)}
				<UserLogo />
			</MenuContainer>
			{hidden ? null : <DropDown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	hidden: selectMenuHidden,
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
