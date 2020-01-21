import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyC86_yHL9CEsrgflNLuF6Qcp4Hex7mCKdg',
  authDomain: 'socialnetwork-5e5d1.firebaseapp.com',
  databaseURL: 'https://socialnetwork-5e5d1.firebaseio.com',
  projectId: 'socialnetwork-5e5d1',
  storageBucket: 'socialnetwork-5e5d1.appspot.com',
  messagingSenderId: '784795782881',
  appId: '1:784795782881:web:fcc2f56d205feb6cbf71a0',
  measurementId: 'G-79LZKYK2Z7',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
// firebase.analytics();
