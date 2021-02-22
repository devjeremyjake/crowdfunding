import React from 'react';
import {
	SignInContainer,
	LeftSide,
	RightSide,
	SignInHandler,
	SubHeader,
	OptionalLeft,
	OptionalRight,
	OptionalCenter,
	Optional,
	OptionalLogin,
	SignInFaceBook,
	SignInGoogle,
} from './SignIn.style';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/Button/Button.component';
import {
	auth,
	signInWithGoggle,
	signInFacebook,
} from '../../firebase/firebase.util';
class SignIn extends React.Component {
	state = {
		email: '',
		password: '',
	};

	// Handle form Value
	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	// Handle form submit;
	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		console.log(email, password);
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.error(error);
		}
		this.setState({ email: '', password: '' });
	};

	render() {
		const { handleChange, state, handleSubmit } = this;
		return (
			<SignInContainer>
				<LeftSide>LeftSide</LeftSide>
				<RightSide>
					<SignInHandler>
						<SubHeader>Help a greater cause with One Click away</SubHeader>
						<form>
							<FormInput
								type="text"
								name="email"
								handleChange={handleChange}
								value={state.email}
								label="Email"
								required
							/>
							<FormInput
								type="password"
								name="password"
								label="Password"
								handleChange={handleChange}
								value={state.password}
							/>
							<Button onClick={handleSubmit} type="submit">
								Sign In
							</Button>
						</form>
						{/* AuthO Login */}
						<Optional>
							<OptionalLeft />
							<OptionalCenter>OR</OptionalCenter>
							<OptionalRight />
						</Optional>
						<OptionalLogin>
							<SignInFaceBook
								size="42"
								title="Facebook Login"
								onClick={signInFacebook}
							/>
							<SignInGoogle
								size="42"
								title="Goggle login"
								onClick={signInWithGoggle}
							/>
						</OptionalLogin>
					</SignInHandler>
				</RightSide>
			</SignInContainer>
		);
	}
}

export default SignIn;
