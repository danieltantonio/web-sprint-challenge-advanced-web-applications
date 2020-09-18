import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initLogin = {
  username: 'Lambda School',
  password: 'i<3Lambd4'
}

const Login = () => {
  const [login, setLogin] = useState(initLogin);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', login)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push('/bubblepage');
    })
    .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input name='username' type='text' value={login.username} onChange={handleChange}/>
        <input name='password' type='password' value={login.password} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
