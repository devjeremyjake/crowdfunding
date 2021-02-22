import React from 'react';
import {
	FormGroup,
	FormInputContainer,
	FormInputLabel,
} from './forminput.style';
const FormInput = ({ handleChange, label, ...props }) => {
	return (
		<FormGroup>
			<FormInputContainer onChange={handleChange} {...props} />
			{label ? (
				<FormInputLabel className={props.value.length ? 'shrink' : ''}>
					{label}
				</FormInputLabel>
			) : null}
		</FormGroup>
	);
};

export default FormInput;
