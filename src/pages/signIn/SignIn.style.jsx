import styled from 'styled-components';
import { Google } from '@styled-icons/boxicons-logos/Google';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';

export const SignInContainer = styled.div`
	display: flex;
	height: 100vh;
`;

export const LeftSide = styled.div`
	width: 50%;
	background: linear-gradient(to left bottom, #9ee2bd, #151a17);
	color: #fff;
`;

export const RightSide = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SignInHandler = styled.div`
	width: 60%;
`;

export const SubHeader = styled.p`
	font-size: 15px;
	margin-top: 10px;
	text-align: center;
	letter-spacing: 2px;
	font-weight: 600;
	color: #254b36;
`;

export const OptionalLeft = styled.span`
	width: 130px;
	height: 2px;
	background-color: #214b31;
`;

export const OptionalRight = styled.span`
	width: 130px;
	height: 2px;
	background-color: #214b31;
`;

export const Optional = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;
export const OptionalCenter = styled.span`
	font-size: 13px;
	font-weight: 900;
	padding: 0 10px;
`;

export const OptionalLogin = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const SignInFaceBook = styled(Facebook)`
	color: #0071a5;
	width: 45px;
	height: 45px;
	border: 2px solid #0071a5;
	border-radius: 50%;
`;

export const SignInGoogle = styled(Google)`
	color: #a11a1a;
	width: 45px;
	height: 45px;
	border: 2px solid #a11a1a;
	border-radius: 50%;
`;
