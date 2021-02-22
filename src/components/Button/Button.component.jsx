import React from 'react';
import { CustomButton } from './Button.style';

const Button = ({ children, ...props }) => {
	return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
