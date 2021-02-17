import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	background-color: ${({ bgColor }) => (bgColor ? '#3cb4ac' : 'transparent')};

	@media screen and (max-width: 960px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: auto;
	width: 100%;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 50px;
		padding: 0;
	}
`;

export const MenuContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 960px) {
		width: 80%;
	}
`;

export const OptionLink = styled(Link)`
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	padding: 2px 15px;
	text-decoration: none;
	color: #fff;
`;
