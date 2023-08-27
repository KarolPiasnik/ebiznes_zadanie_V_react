import React from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const UserInfo = () => {
  const username = cookies.get("USERNAME");
  return (
    <span>{"Logged in as: "+username}</span>
  );
}
export default UserInfo;