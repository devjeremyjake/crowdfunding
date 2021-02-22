import Project_DATA from './project.data';
import ProjectActionTypes from './projects.types';

const INITIAL_STATE = {
	projects: Project_DATA,
};

const ProjectsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProjectActionTypes.PROJECT_LIST:
			return {
				...state,
				projects: action.payload,
			};
		default:
			return state;
	}
};

export default ProjectsReducer;
