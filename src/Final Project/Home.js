import { Link } from "react-router-dom";
import Navi from "./navbar";

export default function Home(){
    return(
        <>
            <Navi/>
            <div style={{marginTop:'70px'}} className="text-center">Welcome to Entertainment <br/> <Link to='/Fetchget' className="text-light">Click here</Link></div>
            {/* <div className="carousel" id='demo' data-bs-ride='slide'>
                <div className="carousel-indicators">
                    <div data-bs-ride-to='1' className="active" data-bs-target='carousel'></div>
                    <div data-bs-ride-to='2' className="active" data-bs-target='carousel'></div>
                    <div data-bs-ride-to='3' className="active" data-bs-target='carousel'></div>
                </div>

                <div className="carousel-inners">
                    <div className="carousel-item">
                        <img src="./image/groot.jpg" className="active" alt='groot' style={{height:'auto',width:'100%'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="./image/vijay.png" className="active" alt='groot' style={{height:'auto',width:'100%'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="./image/cini.jpg" className="active" alt='groot' style={{height:'auto',width:'100%'}}/>
                    </div>
                </div>
                
                <button type="button" className="carousel-prev-control" data-bs-ride-to='prev' data-bs-slide='#demo'>
                    <span className="carousel-prev-icon"></span>
                </button>
                <button type="button" className="carousel-next-control" data-bs-ride-to='next' data-bs-slide='#demo'>
                    <span className="carousel-next-icon"></span>
                </button>
            </div> */}
            
        </>
    );
};