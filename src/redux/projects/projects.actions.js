import ProjectActionTypes from './projects.types';

export const setProjectList = (projectList) => ({
	type: ProjectActionTypes.PROJECT_LIST,
	payload: projectList,
});
