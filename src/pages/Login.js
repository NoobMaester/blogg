import React from 'react';
import { auth, provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {

    //function to redirect to a desired path
    const navigate = useNavigate();

    //function to sign in via pop up
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/")
        });
    }

    return (
        <div className = "login-page">
            <p>Sign In with Google To Continue</p>
            <button className='btn' onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default Login
