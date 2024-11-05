import { Link } from "react-router-dom";
import Navi from "./navbar";

export default function Home(){
    return(
        <>
            <Navi/>
            <div style={{marginTop:'70px'}}>Welcome to Entertainment <Link to='/Fetchget'>Click here</Link></div>
        </>
    );
};