import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProjectListForPreview } from '../../redux/projects/projects.selectors.js';
import DiscoverPreview from '../../components/DiscoverPreview/Discoverpreview.component';
import Header from '../../components/Header/Header.component';

function Discoveroverview({ collections }) {
	return (
		<div>
			<Header />
			{collections.map(({ id, ...otherProjectProps }) => (
				<DiscoverPreview key={id} {...otherProjectProps} />
			))}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectProjectListForPreview,
});

export default connect(mapStateToProps)(Discoveroverview);
