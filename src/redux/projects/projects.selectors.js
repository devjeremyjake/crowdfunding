import { createSelector } from 'reselect';

const projectList = (state) => state.project;

// get project list
export const selectProjectList = createSelector(
	[projectList],
	(list) => list.projects
);

// get individual items based on Route name
export const selectCollection = (collectionUrlParam) =>
	createSelector([selectProjectList], (collections) =>
		collections ? collections[collectionUrlParam] : null
	);

// convert projectlist object to array
export const selectProjectListForPreview = createSelector(
	[selectProjectList],
	(projects) =>
		projects ? Object.keys(projects).map((key) => projects[key]) : []
);
