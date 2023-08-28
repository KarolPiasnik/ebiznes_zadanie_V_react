import React from 'react';

const Login = () => {
  return (
    <div className="card-body">
      <br>
      </br>
      <form action="http://localhost:1323/auth?provider=google" method="get">
        <input type="submit" value="Press to log in with google" data-test="login-button"/>
      </form>
    </div>
  );
}
export default Login;