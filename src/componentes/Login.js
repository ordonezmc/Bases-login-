import React from 'react';
import './Login.css'; // Importaremos el CSS que haremos a continuación

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back!</h2>
        </div>
        
        <form className="login-form">
          <label>User Name</label>
          <input type="text" placeholder />
          
          <label>Password</label>
          <div className="password-input">
            <input type="password" />
            <span className="toggle-password"></span>
          </div>
          
          <div className="form-options">
        
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" className="login-button">Sign in</button>
        </form>
        
        <p className="register-text">
          Don’t have an account? <a href="#">Register Here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

