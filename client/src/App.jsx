import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import Products from './pages/products';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route element={ <Layout/>}>
            <Route path='/' element={ <Navigate to='/dashboard' replace/> }/>
            <Route path='/dashboard' element={ <Dashboard />} />
            <Route path='/products' element={ <Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
