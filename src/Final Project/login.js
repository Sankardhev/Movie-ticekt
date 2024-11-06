//import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({setIsAuthenticated}){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
    }

    // Replace with your actual authentication API call
    if(email==='Sankar123@gmail.com' && password === 'San@123') {
        localStorage.setItem('isAuthenticated','true');
        setIsAuthenticated(true);
    }else{
        alert('Invalid credentials');
    }
    
    // if(email === 'sankar123@gmail.com' && password === 'San123') {
    //     localStorage.setItem('isAuthenticated','true');
    //     setIsAuthenticated(true);
    // }

    return(
        <>
        <h2 style={{textAlign:'center'}}>Login Account</h2>
        <form name="login" action="/Home" target="_self" onSubmit={handleSubmit}>
            <label for='email'>Email:</label><br/>
            <input
                type="email"
                placeholder="Email"
                id='email'
                style={{alignContent:'center'}}
                onChange={(e)=>setEmail(e.target.value)}
                required
            /><br/><br/>
            <label for='pwd'>Password:</label><br/>
            <input 
                type='password'
                placeholder="password"
                id='pwd'
                onChange={(e)=>setPassword(e.target.value)}
                required
            /><br/><br/>
            <div className='d-flex'>
                <button type="button" className="btn btn-primary mb-4" onClick='document.location="Home.js"'>Login</button>
                <button type='button' className='btn btn-primary mb-4' onClick={()=>{
                    localStorage.removeItem('isAuthenticated');
                    setIsAuthenticated(false);
            }}>Logout</button>
            </div>
            
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
        </>
    )
};