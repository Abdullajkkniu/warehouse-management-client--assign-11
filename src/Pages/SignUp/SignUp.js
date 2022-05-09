import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword,} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import '../SignUp/SignUp.css';

const SignUp = () => {
    
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: ""
    });
    
    const [errors, setErrors]=useState({
        email: "",
        password: "",
        general: ""
    })

    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    
    

        const handleEmailChange=e =>{
            const emailRegex = /\S+@\S+\.\S+/;
            const validEmail = emailRegex.test(e.target.value);
            if(validEmail){
                setUserInfo({...userInfo, email: e.target.value});
                setErrors({...errors, email:""})
            }
            else{
                setErrors({...errors, email:"invalid email"})
                setUserInfo({...userInfo, email: ""})
            }
        }
        const handleSignUp=(e)=>{
            e.preventDefault();
            console.log(userInfo)
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }
        const handlePasswordChange=e =>{
            const passwordRegex = /.{6,}/;
            const validPassword = passwordRegex.test(e.target.value);
            if(validPassword){
                setUserInfo({...userInfo, password: e.target.value});
                setErrors({...errors, password:""})
                
            }
            else{
                setErrors({...errors, password:"invalid password"})
                setUserInfo({...userInfo, password: ""});
            }
        }
        const handleConfirmPasswordChange = (e) => {
            if (e.target.value === userInfo.password) {
                setUserInfo({ ...userInfo, confirmPass: e.target.value });
                setErrors({ ...errors, password: "" });
            } else {
                setErrors({ ...errors, password: "Password's don't match" });
                setUserInfo({ ...userInfo, confirmPass: "" });
            }
        };

        const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
        
    return (
        <div className=' container w-25 p-3'>
            <h2 className='title text-center'>My-PhotoShot</h2>
            <div className='bg-dark text-white border-size p-3'>
            <h3 className='p-2'>Create Account</h3>
            <form onSubmit={handleSignUp}>
                <input className='radius-set w-100 d-block mb-3 m-auto p-1 border' onChange={handleEmailChange} type="text" placeholder='Your Email' required />
                {errors?.email && <p>{errors.email}</p> }
        
                <input className='radius-set w-100  d-block m-auto p-1 border mb-3' onChange={handlePasswordChange} type="password" placeholder='Your password' required/>
                {errors?.password && <p>{errors.password}</p> }

                <input className='radius-set w-100  d-block m-auto p-1 border mb-3' onChange={handleConfirmPasswordChange} type="password" placeholder='Confirm password' required/>
                {errors?.confirmPassword && <p>{errors.confirmPassword}</p> }

                <button className='w-100 button-colors px-4 d-block m-auto p-1'>SIGN UP</button>
                <p className='pt-2'> <small>Already have an account? <Link to="/login" className='set-login'>Login</Link></small> </p>

                
            </form>
            </div>
        </div>
    );
};

export default SignUp;