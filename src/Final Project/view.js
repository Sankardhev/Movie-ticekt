import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navi from "./navbar";
//import { CartContext } from "./cartpage";

export default function Onecard(){

    //const {addToCart}=useContext(CartContext);
    const [data,setData]=useState(null);
    const {_id}=useParams();

    useEffect(()=>{
        fetch(`https://backend-crud-one.vercel.app/product/${_id}`)
        .then(response=>response.json())
        .then(data=>setData(data))
    },[_id]);
    return(
        <>
        <Navi/>
        {data ? (
            <div className="row mt-5">
                <div className="col-sm-6 col-md-6 col-lg-6" style={{marginTop:'70px'}}>
                    <div className='card ms-5' style={{width:'505px'}}>
                        <img src={data.image} alt='movie' className="rounded" style={{height:'500px',width:'503px'}} />
                    </div>
                </div>
                <div className="col-sm-6" style={{marginTop:'70px'}}>
                        <p><b>Id:</b> {data.id}</p>
                        <p><b>Movie:</b> {data.name}</p>
                        <p><b>Director:</b> {data.director}</p>
                        <p><b>Budget:</b> {data.budget}</p>
                        <p><b>ReleaseDate:</b> {data.releasedate}</p>
                        <p><b>Price: <span className="text-danger">$ {data.ticketprice}</span></b></p>
                        <div><b>Describtion:</b> {data.description}</div>
                        <div className='d-flex justify-content-between mt-2'>
                            <button type='button' className='btn btn-warning'><b>Add to Cart</b></button>
                        </div>          
                </div>
            </div>
        ) : (
            <p>Wait...</p>
        )}
        </>
    )
};