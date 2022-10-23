import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn=()=>{

    const googlePopup = async()=>{
       const {user}=  await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <div>Sign In</div>
            <button onClick={googlePopup}>Sign In With Google Popup</button>
        </div>
    )
}

export default SignIn;