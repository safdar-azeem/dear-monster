import { fb, fbAuth } from '../../../config/firebase';
import { FIGHT_START, FIGHT_SUCCESS, FIGHT_ERROR } from '../../types';

export const fightStart = () => ({
	type: FIGHT_START,
});

export const fightSuccess = (status) => ({
	type: FIGHT_SUCCESS,
	payload: status,
});

export const fightAction = () => {
	return (dispatch) => {
		dispatch(fightStart());
        const random = Math.random();
        let status = '';
        if (random < 0.5) {
            status = 'WIN';
        }
        else {
            status = 'LOSE';
        }
        setTimeout(() => { dispatch(fightSuccess(status)); }, 1000);
	};
};
