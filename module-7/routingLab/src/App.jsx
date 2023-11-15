import './App.css'
import {Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/HomeBitcoin'
import Login from './components/LoginBitcoin'

import BitcoinRates from './components/BitcoinRates'


function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>    
          <Route path="/bitcoin-rates" element={<BitcoinRates/>} />
        </Routes>
     </>
  );
}



export default App
