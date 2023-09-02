import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPayment from './components/AddPayment';
import ProductDataTable from './components/ProductDataTable';
import Basket from './components/Basket';

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
        <Route path="/" element={<Navigate to="/products/read" element={<ProductDataTable />} />} />
        <Route exact path="/products/read" element={<ProductDataTable currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket} />} />
        <Route exact path="/payments/create" element={<AddPayment currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket} />} />
        <Route path="/basket" element={<Basket currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket} />} />
      </Routes>
    </div>
  );
}

export default App;