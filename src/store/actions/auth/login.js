import { fb, fbAuth } from '../../../config/firebase';
import { CONNECT_USER_START, CONNECT_USER_SUCCESS, CONNECT_USER_ERROR } from '../../types';
import {notification} from "../../../utils/notification";
export const connectUserStart = () => ({
	type: CONNECT_USER_START,
});

export const connectUserSuccess = (user) => ({
	type: CONNECT_USER_SUCCESS,
	payload: user,
});

export const connectUserError = (error) => ({
	type: CONNECT_USER_ERROR,
	payload: error,
});

const createUser = (dispatch, id) => {
	fbAuth.signOut().then(() => {
		fbAuth.signInWithEmailAndPassword('safdarazeem@gmail.com', 'jaskani@').then(() => {
			fb.collection('users')
				.doc(id)
				.set({
					id: id,
				})
				.then(() => {
					dispatch(connectUserSuccess(id));
				})
				.catch((error) => {
					dispatch(connectUserError('connection not successful'));
				});
		});
	});
};

export const connectUserAction = () => {
	return (dispatch) => {
		dispatch(connectUserStart());
		if (window.ethereum) {
			window.ethereum.enable().then(() => {
				window.ethereum.autoRefreshOnNetworkChange = false;
				window.ethereum.request({ method: 'eth_accounts' }).then((res) => {
                    if(res[0]){
                       fb.collection('users').doc(res[0]).get().then((doc) => {
                            if (doc.exists) {
                                createUser(dispatch, res[0]);
                            } else {
                              dispatch(connectUserSuccess(res[0]));
                            }
                        })
						let notify = notification({
							type: 'success',
							message: 'MetaMask connected successfully',
						});
						notify();
                    }else{
                        dispatch(connectUserError('connection not successful'));
                    }
                });
			});
		} else {
			let notify = notification({
				type: 'error',
				message: 'Please install MetaMask to continue',
			});
			notify();
			console.log('');
		}
	};
};
