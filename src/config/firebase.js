import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

console.log('process :>> ', process.env);
const firebaseConfig = {
	apiKey: 'AIzaSyDlX88rJEWzXotFM4f9DLPqsVcQlEl2Kyc',
	authDomain: 'dear-monster.firebaseapp.com',
	projectId: 'dear-monster',
	storageBucket: 'dear-monster.appspot.com',
	messagingSenderId: '703423975487',
	appId: '1:703423975487:web:be2402df829505dcf4288a',
	measurementId: '${config.measurementId}',
};

firebase.initializeApp(firebaseConfig);
export const fb = firebase.firestore();
export const fbAuth = firebase.auth();
export const fbStorage = firebase.storage();
