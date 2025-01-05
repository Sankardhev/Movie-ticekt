//import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login({setIsAuthenticate}){

    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Replace with your actual authentication API call
        if(email === 'Sankar5544@gmail.com' && password === 'password') {
            localStorage.setItem('isAuthenticate','true');
            setIsAuthenticate(true);
            loginSuccess();
            navigate('/Home');
        }else{
            alert('Invalid credentials');
        }
    };

    const loginSuccess= () =>
        toast('Login Successful!...',{
            position:'top-center',
            style:{
                margin:20,
                border:'5px solid green',
                color:'green',
                duration:'3000'
            },
        });

    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 bg-info mt-5' style={{margin:'auto',width:'800px'}}>
                        <form style={{textAlign:'center'}}>
                            <h2 className='mb-5'>Login Account</h2>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                id='email'
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                style={{marginLeft:'10px'}}
                            /><br/><br/>
                            <label htmlFor='pwd'>Password:</label>
                            <input 
                                type="password"
                                placeholder="password"
                                id="pwd"
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                                style={{marginLeft:'10px'}}
                            /><br/><br/>
                            <button type="submit" className="btn btn-primary px-5 mb-3" onClick={handleSubmit}>Login</button>
                            
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                    navigate('/Home');
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                            }}
                            />
                        </form>
                </div>
            </div>
        </div>
        </>
    )
};