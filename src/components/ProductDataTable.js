import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import addToBasketIcon from "./../assets/basket-icon-32.png"
import "../App.css";


const ProductDataTable = ({currentBasket, setBasket}) => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:1323";
  const [products, setProducts] = useState([]);

  const setProductData = () => {
    axios.get(baseURL + "/products").then((response) => {
      setProducts(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setProductData();
  }, []);


  const addToBasket = (product) => {
      alert("Product " + product.name + " added to basket!");
      currentBasket.products.push(product)
      setProductData();
  }

  const removeAllProduct = (id) => {
    axios.delete(baseURL + "/products").then((response) => {
      alert("All Products deleted!");
      setProductData();
      navigate('/products/read')
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
          onClick={() => navigate("/baskets/read/1")}>
          Go to basket  {currentBasket.name} : {currentBasket.products ? currentBasket.products.length  : "nullee"}

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
                    <th scope="col">Add to basket</th>

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
                        <td >
                          <button
                            onClick={() => addToBasket(product)} className="button"
                          > <img src={addToBasketIcon} alt="Add to basket" title="Add to basket" width="30" height="30" />
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
          onClick={() => removeAllProduct()}>
          Remove All
        </button>
      </div>

    </div>

  );
}
export default ProductDataTable;