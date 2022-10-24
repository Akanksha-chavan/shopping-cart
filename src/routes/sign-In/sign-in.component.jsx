import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import { useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth';
import {SignUpForm} from '../../sign-up/sign-up';

const SignIn=()=>{

    useEffect(()=>{

        const func = async()=>{
            const response= await getRedirectResult(auth);
            if(response){
                const userDocRef= await createUserDocumentFromAuth(response.user);
            }
        }
        func();
        
    },[]);

    const googlePopup = async()=>{
       const {user}=  await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <div>Sign In</div>
            <button onClick={googlePopup}>Sign In With Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;