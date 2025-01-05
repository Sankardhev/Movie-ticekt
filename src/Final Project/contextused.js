import { useContext } from "react";
import { CartContext } from "./cartpage";
import Navi from "./navbar";

export default function Viewcart(){    
    const {cartItems,clearCart,getCartTotal,addToCart,removeFromCart}=useContext(CartContext);
    return(
        <>
        <Navi/>
            <div className="container-fluid">
                <div className="row">
                    {cartItems.map((items)=>(
                        <div className="col-sm-3" style={{marginTop:'70px'}}>
                            <div className='card m-2' style={{width:'315px'}}>
                                <div className='card-img-top'>
                                    <img src={items.image} alt='movie' style={{height:'300px',width:'100%'}}/>
                                </div>
                                <div className='card-body'>
                                    <div><b>Id:</b> {items._id}</div>
                                    <div><b>Movie:</b> {items.name}</div>
                                    <div><b>ReleaseDate:</b> {items.releasedate}</div>
                                    <div><b>Price: <span className="text-danger">$ {items.ticketprice}</span></b></div>
                                    <div><span className="btn" onClick={()=>addToCart(items)}>+</span> {items.quantity} <span class='btn' onClick={()=>removeFromCart(items)}>-</span></div>
                                    <div className='d-flex justify-content-between'>
                                    <button type='button' className='btn btn-success'><b>Book Now</b></button>
                                    <span className="btn text-danger" onClick={()=>removeFromCart(items)}><i class="bi bi-trash3"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-sm-12">
                        {
                            cartItems.length > 0 ? (
                                <div>
                                    <h2>Total: $ {getCartTotal()}</h2>
                                    <button type="button" className="btn btn-info" onClick={()=>{clearCart()}}>Clearcart</button>
                                </div>
                            ) : (
                                <div style={{margin:'100px 0 100px 450px',textAlign:'center',width:'340px',fontSize:'30px'}} className="text-white bg-info p-2 rounded-pill">Your cart is Empty</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};