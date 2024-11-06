import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Final Project/login';
import Getfetch from './Final Project/Fetchget';
import Onecard from './Final Project/view';
import Home from './Final Project/Home';
// import Navi from './Final Project/navbar';
import Viewcart from './Final Project/contextused';
import About from './Final Project/about';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
// import { CartProvider } from './Final Project/cartpage';


function App() {

  const [isAuthenticated,setIsAuthenticated]=useState(localStorage.getItem('isAuthenticated')==='true');

  return (
    <>
      {/* <Navi/> */}
      {/* <CartProvider> */}
          <Routes>
            <Route path='/' element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
            <Route path='/Home' element={isAuthenticated ? <Home/> : <Navigate to="/login"/> } />
            <Route path='/about' element={<About/>} />
            <Route path='/Fetchget' element={<Getfetch/>} />
            <Route path='/view/:_id' element={<Onecard/>} />
            <Route path='/contextused' element={<Viewcart/>} />
          </Routes>
        {/* </CartProvider> */}
        <Toaster position='top-right' reverseOrder={false}/>
    </>
  );
}

export default App;
