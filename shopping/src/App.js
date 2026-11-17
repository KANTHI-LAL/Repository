import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Viewcart from './pages/Viewcart';
import { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const cartContext = createContext();

function App() {
  const [cart, setCart ] = useState([]);
  return (
    <>
    <cartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/viewcart" element={<Viewcart />} />
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>
    </>
  );
}

export default App;
