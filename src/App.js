import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import DishDetail from './pages/DishDetail';
import Cart from './pages/Cart';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/dish/:id" element={<DishDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
