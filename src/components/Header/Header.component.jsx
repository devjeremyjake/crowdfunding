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
} from './Header.style';

import { selectMenuHidden } from '../../redux/menu/menu.selector';

const Header = ({ hidden }) => {
	return (
		<HeaderContainer bgColor>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<MenuContainer>
				<OptionLink to="/about">About</OptionLink>
				<OptionLink to="/discover">Discover</OptionLink>
				<OptionLink to="/signIn">Get Started</OptionLink>
				<UserLogo />
			</MenuContainer>
			{hidden ? null : <DropDown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	hidden: selectMenuHidden,
});

export default connect(mapStateToProps)(Header);
