import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth'
import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpVsMMm-O80oOM9LT-TsKcSnjfL2Zh6iM",
    authDomain: "shopping-cart-db-169fe.firebaseapp.com",
    projectId: "shopping-cart-db-169fe",
    storageBucket: "shopping-cart-db-169fe.appspot.com",
    messagingSenderId: "533420539830",
    appId: "1:533420539830:web:b5cadc51eefda407958b17"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth= getAuth();
  export const signInWithGooglePopup= ()=> signInWithPopup(auth, provider);
  
  export const db= getFirestore();
  
  export const createUserDocumentFromAuth= async(userAuth)=>{
    const userDocRef= doc(db, 'users', userAuth.uid);
    const userSnapShot= await getDoc(userDocRef);
    if(!userSnapShot.exists()){
      const {displayName, email}= userAuth;
      const createdAt= new Date();
      try{
        await setDoc(userDocRef,
          {
            displayName,
            email,
            createdAt
          }
          )
      }catch(error){
        console.log("error creating the user", error.message);
      }
    }
    return userDocRef;
  }