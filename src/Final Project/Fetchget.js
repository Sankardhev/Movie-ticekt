import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartpage';
import Navi from './navbar';

export default function Getfetch() {

const {addToCart}=useContext(CartContext);
const [data,setData]=useState();
const [error,setError]=useState(null);
const [loading,setLoading]=useState(true);

useEffect(()=>{
  fetch('https://backend-crud-one.vercel.app/product')
  .then(response=>response.json())
  .then(data=>setData(data))
  .then(error=>setError(error))
  .then(loading=>setLoading(loading))
},[])

if(loading) return <p>Loading...</p>
if(error) return <p>error {error.message}</p>

  return (
      <>
        <Navi />
        <h1 style={{textAlign:'center',marginTop:'70px'}}>Fetched Movie data</h1>
        <div className='container-fluid'>
          <div className='row'>
            {data.map(product => (
              <div className='col-sm-3'>
                <div className='card m-2' style={{width:'315px'}}>
                  <div className='card-img-top'>
                  <Link to={`/view/${product._id}`}><img src={product.image} alt='movie' style={{height:'300px',width:'100%'}}/></Link>
                  </div>
                  <div className='card-body'>
                    <div><b>Id:</b> {product._id}</div>
                    <div><b>Movie:</b> {product.name}</div>
                    <div><b>ReleaseDate:</b> {product.releasedate}</div>
                    <div><b>Price: <span className="text-danger">{product.ticketprice}</span></b></div>
                    <div className='d-flex justify-content-between mt-2'>
                    <Link className='btn btn-primary' to={`/view/${product._id}`}><b>View</b></Link>
                    <button type='button' className='btn btn-warning' onClick={()=>addToCart(product)}><b>Add to Cart</b></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
  )
};