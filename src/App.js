import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// Components
import Header from './components/Header/Header.component';
// Pages
import HomePage from './pages/HomePage/homePage.component';
import AboutPage from './pages/AboutPage/AboutPage.component';
import Discover from './pages/discover/discover.component';
import SignUp from './pages/SignUp/signup.component';
import NoPageFound from './pages/404-page/404-page.component';
import SignIn from './pages/signIn/SignIn.component';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/discover" component={Discover} />
					<Route path="/signUp" component={SignUp} />
					<Route path="/signIn" component={SignIn} />
					<Route path="*" component={NoPageFound} />
				</Switch>
			</div>
		);
	}
}

export default App;
