import {useState,useContext} from 'react';
import{createAuthUserWithEmailandPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input'
import './sign-up.scss';
import Button from '../buttonComponent/buttonComponent';
import {UserContext} from '../../context/user.context';

export const SignUpForm =()=>{
    let {setCurrentUser}= useContext(UserContext);

    let defaultValues={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    const[formValues,setFormValues]=useState(defaultValues);
    const {displayName,email,password,confirmPassword}=formValues;
    
    const resetFormFields=()=>{
        setFormValues(defaultValues);
    }

    const handleSubmit= async(event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailandPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            setCurrentUser(user);
            resetFormFields();
        }catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('cannot create user, email already in use');
            }
            console.log('user creation encountered an error',error);
        }
    }

    const handleChange=(event)=>{
        const {name,value}= event.target;
        setFormValues({...formValues,[name]:value});
    }
    return(
        <div className='signup-form-container'>
            <h2>Don't have an account?</h2>
            <span> Sign Up with your email and password</span>
            <form onSubmit={()=>{}}>
                <FormInput label="Display Name" required type="email" onChange={handleChange} name={"displayName"} value={displayName}/>

                <FormInput label="Email"  required type="text" onChange={handleChange} name={"email"} value={email}/>

                <FormInput label="Password"  required type="password" onChange={handleChange} name={"password"} value={password}/>

                <FormInput label="Confirm Password"  required type="password" onChange={handleChange} name={"confirmPassword"} value={confirmPassword}/>
                <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
            </form>
        </div>
    )
}

