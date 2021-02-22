import React from 'react';
import { Route } from 'react-router-dom';
import Discoveroverview from '../../components/DiscoverOverview/Discoveroverview.component';
import Discoverpage from '../DiscoverPage/Discoverpage.component';

class Discover extends React.Component {
	render() {
		const { match } = this.props;
		console.log(match);
		return (
			<div>
				<Route exact path={`${match.path}`} component={Discoveroverview} />
				<Route path={`${match.path}/:collectionId`} component={Discoverpage} />
			</div>
		);
	}
}

export default Discover;
