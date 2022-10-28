import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import{
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth= getAuth();
  export const signInWithGooglePopup= ()=> signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect= ()=> signInWithRedirect(auth, googleProvider);
  
  export const db= getFirestore();
  
  export const createUserDocumentFromAuth= async(userAuth, additionalInfo={})=>{
    if(!userAuth) return;

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
            createdAt,
            ...additionalInfo
          }
          )
      }catch(error){
        console.log("error creating the user", error.message);
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailandPassword=async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signInAuthUserWithEmailandPassword=async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
  }

  export const signOutUser=async()=>{
    await signOut(auth);
  }

  export const onAuthStateChangedHandler= (callback)=>{
     onAuthStateChanged(auth,callback);
  }

  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd)=>{
    const collectionRef= collection(db,collectionKey);
    const batch= writeBatch(db);

    objectsToAdd.map((object)=>{
      const docRef = doc(collectionRef,object.title.toLowerCase());
      batch.set(docRef,object);
      return ;
    });

    await batch.commit();
  }

  export const getCollectionAndDocuments = async()=>{
    const collectionRef= collection(db,'categories');
    const q= query(collectionRef);

    const querySnapShot= await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot)=>{
      const {title,items} = docSnapShot.data();
      acc[title.toLowerCase()]= items;
      return acc;
    },{})
    
    return categoryMap;
  }