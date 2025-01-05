import { Link } from "react-router-dom";
import Navi from "./navbar";

export default function Home(){
    return(
        <>
            <Navi/>
            <div style={{marginTop:'70px'}} className="text-center">
                Welcome to Entertainment <br/> 
                <Link to='/Fetchget' className="text-light">Click here</Link>
            </div>
        </>
    );
};