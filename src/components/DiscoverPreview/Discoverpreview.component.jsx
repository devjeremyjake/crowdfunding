import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button.component';

const DiscoverPreview = ({ title, history, match, routeName }) => (
	<div>
		<h4>{title}</h4>
		<Button onClick={() => history.push(`${match.path}/${routeName}`)}>
			Support
		</Button>
	</div>
);

export default withRouter(DiscoverPreview);
