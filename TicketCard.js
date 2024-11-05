import React, { useState, useEffect, useContext } from 'react'; 
import './button.css';
import { Link } from 'react-router-dom';
import { CartContext } from './Carousel'; // Make sure this imports the correct CartContext

const Demo = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Add error state
  const { addToCart } = useContext(CartContext); // Destructure addToCart from CartContext

  useEffect(() => {
    fetch(`https://backend-crud-one.vercel.app/product/`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to load products'); // Set error message
      });
  }, []);

  return (
    <>
      <div className='container'>
        {error && <p className="text-danger text-center">{error}</p>} {/* Display error message if there's an error */}
        <div className="row text-center">
          {data.map((item) => (
            <div className="col-md-3 col-lg-3 col-sm-6 my-3" key={item._id}>
              <div className='card'>
                <img src={item.image} alt={item.name} className='img-fluid' />
                <h1 className='display-6'><b>Title:</b> {item.name}</h1>
                <h4>Director: {item.director}</h4>
                <p>Release Date: {item.releasedate}</p>          
                <h6>Budget: {item.budget}</h6>
                <h2 className='text-danger'>${item.ticketprice}</h2>
                <div className='row'>
                  <div className='col'>
                    <Link to={`/product/${item._id}`} className='btn btn-primary'>
                      View <i className="bi bi-eye fs-5"></i>
                    </Link> 
                  </div>
                  <div className='col'>
                    <button className='btn btn-primary me-2' onClick={() => addToCart(item)}>
                      Add to Cart <i className="bi bi-cart2 fs-5"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Demo;
