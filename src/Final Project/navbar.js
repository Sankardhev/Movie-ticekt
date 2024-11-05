import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./cartpage";

export default function Navi(){

    const {cartItems}=useContext(CartContext);

    return(
        <>
            <nav className="navbar navbar-expand-sm fixed-top">
                <div className="container-fluid">
                <NavLink><img src="/image/cini.jpg" alt="icon" style={{height:'50px',width:'100px'}} className="navbar-brand rounded-pill ms-auto"/></NavLink>
                <button type="button" className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#collp'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="collp">
                    <ul className="navbar-nav ms-4">
                        <li className="nav-item">
                            <NavLink to='/Home' className='nav-link' style={{textDecoration:'none',color:'white'}}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Fetchget' className='nav-link' style={{textDecoration:'none',color:'white'}}>Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className='nav-link' style={{textDecoration:'none',color:'white'}}>About</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-nav">
                        <input type="search" className='nav-link rounded-circle' placeholder="Search" style={{paddingTop:'5px'}}/>
                        <NavLink to='/contextused' className='nav-link' style={{textDecoration:'none',color:'white'}}>
                            <span><i className="bi bi-cart text-warning" style={{fontSize:'20px'}}></i>{cartItems.length}</span>
                        </NavLink>
                        <NavLink to='/' className='nav-link' style={{textDecoration:'none'}}>
                            <span><i className="bi bi-person-circle" style={{fontSize:'20px'}}></i></span>
                        </NavLink>
                    </div>
                </div>
                </div>
            </nav>
        </>
    );

};