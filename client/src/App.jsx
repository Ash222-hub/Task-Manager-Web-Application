import React from 'react';
import {  Routes, BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Todo from './Todo/Todo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<SignUp></SignUp>} />
  <Route path="/login" element={<Login />} />
    <Route path='/todo' element={<Todo />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
