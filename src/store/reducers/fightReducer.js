// create a reducer for login
import { FIGHT_START, FIGHT_SUCCESS, FIGHT_ERROR } from '../types';

const initialState = {
	status: '',
	loading: false,
};

export const fightReducer = (state = initialState, action) => {
	switch (action.type) {
		case FIGHT_START:
			return {
				...state,
                status:'',
				loading: true,
			};
		case FIGHT_SUCCESS:
			return {
				...state,
				status: action.payload,
				loading: false,
			};
		case FIGHT_ERROR:
			return {
				...state,
				status: '',
				error: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};
