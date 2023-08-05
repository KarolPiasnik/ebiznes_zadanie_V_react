import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPayment from './components/AddPayment';
import ProductDataTable from './components/ProductDataTable';
import Basket from './components/Basket';

function App() {
  const [currentBasket, setCurrentBasket] = useState('');
  useEffect(() => {
    setCurrentBasket({
      name: "xd",
      products: []
    });
  }, []);
  return (
    <div class="container card mb-4 box-shadow">

      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Zadanie5 react</h4>

      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/products/read" />} />
        <Route exact path="/products/read" element={<ProductDataTable currentBasket={currentBasket} setBasket={setCurrentBasket} />} />
        <Route exact path="/payments/create" element={<AddPayment currentBasket={currentBasket} />} />
        <Route path="/baskets/read/:id" element={<Basket currentBasket={currentBasket} />} />
      </Routes>
    </div>
  );
}

export default App;