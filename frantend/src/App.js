// import logo from './logo.svg';
import './App.css';

import React from 'react';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import Header from './nav/Header';
import Signup from './nav/Signup';
import Login from './nav/Login';
import Home from './nav/Home';
import About from './nav/About';
import Private from './service/Private';
import Product from './nav/Product';


function App() {

  return (
    <div className="App">
    <BrowserRouter>
   
    <Header/>
    <Routes>
    <Route path='/' element={<Private/>}>
<Route path='/home' element={<Home/>}/>
<Route path='/about/:id' element={<About/>}/>
<Route path='/product' element={<Product/>}/>
</Route>
<Route path='/login' element={<Login/>}/>
<Route path='/sign' element={<Signup/>}/>
    </Routes>

      </BrowserRouter>
    </div>
   

  );
} 

export default App;
