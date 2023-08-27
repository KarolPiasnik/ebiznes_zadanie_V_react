import React from 'react';
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

const logout = () => {

  axios.get("http://localhost:1323/auth/logout", { withCredentials: true }).then((response) => {
    cookies.remove("TOKEN")
    cookies.remove("USERNAME")
  }).catch(error => {
    alert("Error Ocurred while logging out:" + error);
  });
}

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-primary nav-item active"
      onClick={() => {
        logout();
        navigate("/login")
      }} data-test="finalize-payment-button">
      Logout
    </button>
  );
}
export default LogoutButton;