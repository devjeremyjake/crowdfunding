import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// Component

// Pages
import HomePage from './pages/HomePage/homePage.component';
import AboutPage from './pages/AboutPage/AboutPage.component';
import Discover from './pages/discover/discover.component';
import SignUp from './pages/SignUp/signup.component';
import NoPageFound from './pages/404-page/404-page.component';
import SignIn from './pages/signIn/SignIn.component';

import { auth, createUserprofileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/menu/menu.actions';
import { selectCurrentUser } from './redux/menu/menu.selector';
class App extends React.Component {
	unscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserprofileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.props.setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/funding" component={Discover} />
					<Route path="/signUp" component={SignUp} />
					<Route
						path="/signIn"
						exact
						render={() =>
							this.props.currentUser ? <Redirect to="/funding" /> : <SignIn />
						}
					/>
					<Route path="*" component={NoPageFound} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
