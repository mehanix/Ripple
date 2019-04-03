const firebase = require("firebase");
require("firebase/firestore");

//Initializing firebase firestore
firebase.initializeApp({
    apiKey: 'AIzaSyBtybh44ZkY4m06035ggap_lMzT7DsAu5I',
    authDomain: 'eur3',
    projectId: 'ripple-ec3e'
});

export default firebase;