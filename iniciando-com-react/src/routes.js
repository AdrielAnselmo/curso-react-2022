import React from 'react';

import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Home from './views/Home';
import Produto from './views/Produtos';
import Navbar from './components/navbar';
import SignIn from './views/SignIn';

const Routas = () =>{
    return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cadastro" element={<Produto/>}/>
        <Route exact path="/login" element={<SignIn/>}/>

    </Routes>
               
 </BrowserRouter>
    )
}

export default Routas;