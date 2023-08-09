import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddPayment = ({basketName, currentBasketProducts, setCurrentBasketProducts}) => {
  const baseURL = "http://localhost:1323/payments";
  const navigate = useNavigate();
  const products = []

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
        <h4>Products List</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Price</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    products &&
                    products.map((product, index) => (
                      <tr>
                        <td>{product.code}</td>
                        <td>{product.price}</td>
                        <td>{product.name}</td>
                      
                      </tr>
                    ))
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