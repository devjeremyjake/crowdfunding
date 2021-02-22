import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { DropDownContainer, ListHolder, ListOption } from './dropdown.style';
import { auth } from '../../firebase/firebase.util';
import { toggleMenuHidden } from '../../redux/menu/menu.actions';
import { selectCurrentUser } from '../../redux/menu/menu.selector';

function DropDown({ dispatch, currentUser }) {
	return (
		<DropDownContainer>
			<ListHolder>
				<ListOption>Contributions</ListOption>
				{currentUser ? (
					<ListOption
						onClick={() => {
							auth.signOut();
							dispatch(toggleMenuHidden());
						}}
					>
						Log Out
					</ListOption>
				) : null}
			</ListHolder>
		</DropDownContainer>
	);
}

const mapStateToprops = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToprops)(DropDown));
