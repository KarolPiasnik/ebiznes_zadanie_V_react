import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPayment from './components/AddPayment';
import ProductDataTable from './components/ProductDataTable';
import Basket from './components/Basket';

function App() {
  const [productsInBasket, setProductsInBasket] = useState('')
  const [basketName, setBasketName] = useState('')

  useEffect(() => {
    setProductsInBasket([]);
    setBasketName("Best basket");
  }, []);
  return (
    <div class="container card mb-4 box-shadow">

      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Zadanie5 react</h4>

      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/products/read" />} />
        <Route exact path="/products/read" element={<ProductDataTable currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket} />} />
        <Route exact path="/payments/create" element={<AddPayment currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket} />} />
        <Route path="/baskets/read/:id" element={<Basket basketName={basketName} currentBasketProducts={productsInBasket} setBasketProducts={setProductsInBasket}/>} />
      </Routes>
    </div>
  );
}

export default App;