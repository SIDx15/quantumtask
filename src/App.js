import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import {useDispatch,  useSelector} from 'react-redux';
import React,{useState, useEffect} from 'react';
import {auth} from "./firebase";
import { setuser } from './redux/action';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/" element={< Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
