import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPayment from './components/AddPayment';
import ProductDataTable from './components/ProductDataTable';
import Basket from './components/Basket';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  const [productsInBasket, setProductsInBasket] = useState('')

  useEffect(() => {
    setProductsInBasket([]);
  }, []);

  return (
    <div className="container card mb-4 box-shadow">

      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Zadanie5 react</h4>

      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/login" element={<Login />} />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/products/read" element={<ProtectedRoutes />} >
          <Route exact path="/products/read" element={<ProductDataTable currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket} />} />
        </Route>
        <Route exact path="/payments/create" element={<ProtectedRoutes />} >
          <Route exact path="/payments/create" element={<AddPayment currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket} />} /></Route>
        <Route path="/basket" element={<ProtectedRoutes />} >
          <Route path="/basket" element={<Basket currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket} />} /></Route>
      </Routes>
    </div>
  );
}

export default App;