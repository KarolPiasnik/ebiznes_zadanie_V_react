import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddPayment = ({basketName, currentBasketProducts, setCurrentBasketProducts}) => {
  const baseURL = "http://localhost:1323/payments";
  const navigate = useNavigate();

  const sumBasketProducts = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.count);
    return sum;
  }

  const sumBasketProductsPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price*product.count);
    return sum;
  }

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/baskets/read/1")}>
          Finalize payment     {basketName}

        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4>Payment</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Products in basket</th>
                    <th>Price total</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    
                      <tr>
                        <td>{sumBasketProducts(currentBasketProducts)}</td>
                        <td>{sumBasketProductsPrice(currentBasketProducts)}</td>
                      </tr>
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}
export default AddPayment;