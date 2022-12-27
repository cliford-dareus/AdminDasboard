import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import Customer from './pages/customer';
import Transaction from './pages/transaction';
import Geography from './pages/geography';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route element={ <Layout/>}>
            <Route path='/' element={ <Navigate to='/dashboard' replace/> }/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/customers' element={<Customer/>} />
            <Route path='/transactions' element={<Transaction/>}/>
            <Route path='/geography' element={<Geography/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
