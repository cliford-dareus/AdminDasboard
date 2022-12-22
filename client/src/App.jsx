import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={ <Navigate to='/dashboard' replace/> }/>
            <Route path='/dashboard' element={ <Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
