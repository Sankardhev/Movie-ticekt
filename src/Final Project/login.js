//import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate=useNavigate();
    return(
        <>
        <h2 style={{textAlign:'center'}}>Login Account</h2>
        <form style={{width:'400px'}} name="login" action="/Home" target="_self">
            <label for='user'>Username:</label><br/>
            <input
                type="text"
                placeholder="Username"
                id='user'
                style={{alignContent:'center'}}
                required
            /><br/><br/>
            <label for='pwd'>Password:</label><br/>
            <input 
                type='password'
                placeholder="password"
                id='pwd'
                required
            /><br/><br/>
            <input type="submit" value='Submit' className="btn bg-primary mb-4"/>
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