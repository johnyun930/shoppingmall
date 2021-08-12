import firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_APPID,
        measurementId: process.env.REACT_APP_MEASUREMENTID
      };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth){
      return;
    }
    const userRef = firestore.doc('users/128fdashadu');
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(err){
        console.log('error creating user',err.message);
      }
    }

    return userRef;

  }


 firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

let provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

