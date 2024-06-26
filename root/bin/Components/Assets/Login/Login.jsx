import React from 'react';
import './App.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Cadastrar</div>
        <div className="underline">
        </div>
        <div className="inputs">
        <div className="input">
          <img src={user_icon} alt=""/>
          <input type="text"/>
        </div> 
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email"/>
        </div> 
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password"/>
        </div>  
      </div>
      <div className="forgot-password">Esqueceu a senha? <span>Click here</span></div>      
      <div className="submit-container"></div>
      <div className="submit">Cadastrar</div>
      <div className="submit">Login</div>
    </div>
    </div>
  );
}

export default Login;