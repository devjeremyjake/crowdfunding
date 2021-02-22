import styled from 'styled-components';

export const DropDownContainer = styled.div`
	position: absolute;
	width: 200px;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 20px;
	border: 0px solid #40635e;
	top: 70px;
	right: 20px;
	z-index: 5;
`;

export const ListHolder = styled.ul`
	list-style: none;
`;
export const ListOption = styled.li`
	padding: 5px 0;
	font-size: 16px;
	font-weight: 600;
	color: #225c54;
	cursor: pointer;
`;
