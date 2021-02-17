import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDjYzKpqO5zGi8GetGEpOHjdbzitb8UEqk',
	authDomain: 'crowdfunding-b0990.firebaseapp.com',
	projectId: 'crowdfunding-b0990',
	storageBucket: 'crowdfunding-b0990.appspot.com',
	messagingSenderId: '489881840100',
	appId: '1:489881840100:web:e1654b2daba65f80b1fff1',
	measurementId: 'G-4CWSKN3E26',
};

firebase.initializeApp(config);
// Activate new user

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Goggle auth login
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoggle = () => auth.signInWithPopup(provider);

// Facebook auth login
const provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ display: 'popup' });
export const signInFacebook = () => auth.signInWithPopup(provider);

export default firebase;
