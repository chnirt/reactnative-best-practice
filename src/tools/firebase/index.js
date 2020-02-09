import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD7H9iwmi9olwh711r-vEUSH2OwqgVenj4',
  authDomain: 'social-network-6a85d.firebaseapp.com',
  databaseURL: 'https://social-network-6a85d.firebaseio.com',
  projectId: 'social-network-6a85d',
  storageBucket: 'social-network-6a85d.appspot.com',
  messagingSenderId: '952454268715',
  appId: '1:952454268715:web:16225730485d1bc35f676e',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
// firebase.analytics();
