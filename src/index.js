import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./providers/AuthContext";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
