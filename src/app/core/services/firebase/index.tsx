import firebase from 'firebase';
import credentials from '../../../../config/firebase/credentials.json';

firebase.initializeApp(credentials);

export default firebase.firestore();
