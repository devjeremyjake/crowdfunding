import styled from 'styled-components';

export const Icon = styled.div`
	display: none;
	color: #fff;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 30px;
		transform: translate(-100%, 30%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;
