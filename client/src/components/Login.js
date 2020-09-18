import React, { useState } from "react";

const initLogin = {
  username: '',
  password: ''
}

const Login = () => {
  const [login, setLogin] = useState(initLogin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input type='text' value={login.username} onChange={handleChange}/>
        <input type='password' value={login.password} onChange={handleChange}/>
      </form>
    </>
  );
};

export default Login;
