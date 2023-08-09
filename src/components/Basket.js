import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import removeIcon from "./../assets/remove-icon-32.png";
import "../App.css";


const Basket = ({ currentBasketProducts, setBasketProducts }) => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:1323";
  const params = useParams();

  useEffect(() => {
  }, []);


  const removeFromBasket = (product) => {
    const newProducts = [...currentBasketProducts];
    console.log(newProducts)
    newProducts.splice(newProducts.indexOf(product),1)
    console.log(newProducts)
    setBasketProducts(newProducts)
    console.log("wat")
  }

  const removeAllFromBasket = () => {
    setBasketProducts([])
  }

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/payments/create")}>
          Proceed to payment
        </button>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => (navigate("/products/read"))}>
          Back     { }

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
                    <th>Count</th>
                    <th scope="col">Remove from basket</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    currentBasketProducts &&
                    currentBasketProducts.map((product, index) => (

                      <tr>
                        <td>{product.code}</td>
                        <td>{product.price}</td>
                        <td>{product.name}</td>
                        <td>{product.count}</td>
                        <td >
                          <button
                            onClick={() => removeFromBasket(product)} className="button"
                          > <img src={removeIcon} alt="Remove from basket" title="Remove from basket" width="30" height="30" />
                          </button>
                        </td>
                      </tr>

                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button className="btn btn-sm btn-danger"
          onClick={() => removeAllFromBasket()}>
          Remove All
        </button>
      </div>
    </div>

  );
}
export default Basket;