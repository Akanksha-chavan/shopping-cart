import {auth} from '../../utils/firebase/firebase.utils'
import {getRedirectResult} from 'firebase/auth';
import {SignUpForm} from '../../sign-up/sign-up';
import {SignInForm} from '../../components/sign-in-form/sign-in-form';
import './sign-in.component.scss'

const SignIn=()=>{

    // useEffect(()=>{
        //this is for-
        //<button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>

    //     const func = async()=>{
    //         const response= await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef= await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     func();
        
    // },[]);


    return(
        <div className='sign-in-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;