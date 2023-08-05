import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import removeIcon from "./../assets/remove-icon-32.png";
import "../App.css";


const Basket = ({ currentBasket }) => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:1323";
  const [basket, setBasket] = useState([]);
  const params = useParams();
  const setBasketData = () => {
    axios.get(baseURL + "/baskets/" + params.id).then((response) => {
      setBasket(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setBasketData();
  }, []);


  const removeFromBasket = (product) => {
    axios.delete(baseURL + "/baskets/" + product.id).then((response) => {
      alert("Basket record " + product.id + " deleted!");
      setBasketData();
      navigate('/read')

    }).catch(error => {
      alert("Error Ocurred in removeProduct:" + error);
    });
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
                    <th scope="col">Remove from basket</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    currentBasket.products &&
                    currentBasket.products.map((product, index) => (

                      <tr>
                        <td>{product.code}</td>
                        <td>{product.price}</td>
                        <td>{product.name}</td>
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
          onClick={() => { }}>
          Remove All
        </button>
      </div>
    </div>

  );
}
export default Basket;