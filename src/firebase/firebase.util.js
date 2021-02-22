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
export const createUserprofileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error Creating User', error.message);
		}
	}
	console.log(userAuth);
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Goggle auth login
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoggle = () => auth.signInWithPopup(provider);

// Facebook auth login
const providerF = new firebase.auth.FacebookAuthProvider();
export const signInFacebook = () => auth.signInWithPopup(providerF);

export default firebase;
