import {useState} from 'react';
import{signInWithGooglePopup,signInAuthUserWithEmailandPassword} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input'
import './sign-in-form.scss';
import Button from '../buttonComponent/buttonComponent';

export const SignInForm =()=>{
    
    let defaultValues={
        email:'',
        password:''
    }

    const[formValues,setFormValues]=useState(defaultValues);
    const {email,password}=formValues;
    
    const resetFormFields=()=>{
        setFormValues(defaultValues);
    }

    const handleSubmit= async(event)=>{
        event.preventDefault();

        try{
            const {user}= await signInAuthUserWithEmailandPassword(email,password);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case'auth/wrong-password':
                    alert("incorrect password for email");
                    break;
                case'auth/user-not-found':
                    alert("no user associated with this email");
                    break;
                default:
                    alert(error);
            }
        }
    }

    const googlePopup = async()=>{
        await signInWithGooglePopup();
     } 

    const handleChange=(event)=>{
        const {name,value}= event.target;
        setFormValues({...formValues,[name]:value});
    }
    return(
        <div className='signIn-form-container'>
            <h2>Already have an account?</h2>
            <span> Sign In with your email and password</span>
            <form onSubmit={()=>{}}>
                <FormInput label="Email"  required type="text" onChange={handleChange} name={"email"} value={email}/>

                <FormInput label="Password"  required type="password" onChange={handleChange} name={"password"} value={password}/>
                
                <div className='buttons-container'>
                    <Button type='submit' onClick={handleSubmit}>Sign In</Button>
                    <Button buttonType='google' type='button' onClick={googlePopup}>Google Sign In </Button>
                </div>

            </form>
        </div>
    )
}


