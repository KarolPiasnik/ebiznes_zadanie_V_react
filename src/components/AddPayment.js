import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogoutButton from './LogoutButton';
import UserInfo from './UserInfo';

const AddPayment = ({ currentBasketProducts, setBasketProducts}) => {
  const baseURL = window.location.protocol + "//" +window.location.hostname + ":1323";
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

  const sendPayment = (products) => {
    let payment = {amount: sumBasketProductsPrice(products), numberOfProducts: sumBasketProducts(products)}
    axios.post(baseURL + "/payments", payment).then(() => {
      setBasketProducts([]);
      alert("Payment finalized. Basket cleared")
    }).catch(error => {
      alert("Error Ocurred while finalizing payment:" + error);
    });
  }

  return (
    <div className="card-body">
      <LogoutButton/>
      <UserInfo/>
      <br>
      </br>
      <nav data-test="payment-page-navigation">
        <button
          className="btn btn-primary nav-item active"
          onClick={() => sendPayment(currentBasketProducts)} data-test="finalize-payment-button">
          Finalize payment
        </button>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/basket")} data-test="back-to-basket-button">
          Back to basket
        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4 data-test="payment-page-header">Payment</h4>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered table-striped" data-test="payment-table">
                <thead>
                  <tr>
                    <th>Products in basket</th>
                    <th>Price total</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    
                      <tr>
                        <td>{currentBasketProducts ? sumBasketProducts(currentBasketProducts) : "0"}</td>
                        <td>{currentBasketProducts ? sumBasketProductsPrice(currentBasketProducts) : "0"}</td>
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