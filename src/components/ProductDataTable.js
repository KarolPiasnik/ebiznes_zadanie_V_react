import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import addToBasketIcon from "./../assets/basket-icon-32.png"
import "../App.css";
import LogoutButton from './LogoutButton';
import UserInfo from './UserInfo';


const ProductDataTable = ({ currentBasketProducts, setBasketProducts }) => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:1323";
  const [products, setProducts] = useState([]);

  const setProductData = () => {
    axios.get(baseURL + "/products", { withCredentials: true }).then((response) => {
      setProducts(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  const sumBasketProducts = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.count);
    return sum;
  }

  useEffect(() => {
    setProductData();
  }, []);


  const addToBasket = (product) => {
    alert("Product " + product.name + " added to basket!");
    const newProducts = [...currentBasketProducts];
    const found = newProducts.filter(newProduct => newProduct.code === product.code);
    if (found.length === 0) {
      product.count = 1
      newProducts.push(product);
    }
    else {
      newProducts.forEach(newProduct => {
        if (newProduct.code === product.code) {
          newProduct.count = newProduct.count + 1;
        }
      })
    }
    setBasketProducts(newProducts);
  }

  return (
    <div className="card-body">
      <LogoutButton/>
      <UserInfo/>
      <br>
      </br>
      <nav data-test="products-page-navigation">
        <button
          data-test="go-to-basket-button"
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/basket/")}>
          Go to basket
        </button> Products in basket: {currentBasketProducts ? sumBasketProducts(currentBasketProducts) : "0"}
        <br/>
      </nav>

      <br></br>
      <div className="col-md-6">
        <h4 data-test="product-list-header">Products List</h4>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered table-striped" data-test="product-list-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Price</th>
                    <th>Name</th>
                    <th scope="col" >Add to basket</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    products &&
                    products.map((product, index) => (
                      <tr key={index}>
                        <td>{product.code}</td>
                        <td>{product.price}</td>
                        <td>{product.name}</td>
                        <td>
                          <button
                            onClick={() => addToBasket(product)} className="button">
                              <img src={addToBasketIcon} alt="Add to basket" title="Add to basket" width="30" height="30" data-test="add-product-to-basket-button" />
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
      </div>
    </div>

  );
}
export default ProductDataTable;