import './App.css';
import Demo from './Components/Home/TicketCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/Home/ViewImage';
import { LoginUser } from './Components/Home/Login';
import { NavigationBar } from './Components/Home/NavigationBar';
import { CartProvider } from './Components/Home/Carousel'; // Changed to CartProvider
import CartList from './Components/Home/CartList'; // Changed import

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Demo />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/CartView/:id" element={<CartList />} />
            <Route path="/CartDetails" element={<CartList />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
