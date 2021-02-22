import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/projects/projects.selectors';

const Discoverpage = ({ project, match }) => (
	console.log(match.params.collectionId),
	console.log(project),
	(
		<div>
			<h4>Details page</h4>
		</div>
	)
);

const mapStateToProps = (state, ownProps) => ({
	project: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Discoverpage);
