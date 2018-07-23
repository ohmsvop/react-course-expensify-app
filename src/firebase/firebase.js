import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().on('value', (snapshot) => {
//     value = snapshot.val()
//     console.log(`${value.name}`);
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });
// database.ref().set({
//     name: 'Mars',
//     age: 29,
//     location: {
//         city: 'Taipei',
//         country: 'Taiwan'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This.failed.', e);
// });

// database.ref('age').set(26);
// database.ref('location/city').set('Tokyo');
// database.ref('attributes').set({
//     height: 160,
//     weight: 60
// });

// database.ref('location/city').remove();