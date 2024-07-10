import * as React from 'react';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout.js';
import Home from './pages/home.js';
import Services from './pages/services.js'
import Customers from './pages/customers.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/customers" element={<Customers />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
