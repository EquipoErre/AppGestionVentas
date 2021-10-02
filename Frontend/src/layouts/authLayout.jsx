import React from 'react';
// import { Link } from 'react-router-dom';
import 'styles/login.page.css';

const AuthLayout = ({ children }) => {
  return (
   
    <div className="outer"> 
        {children}
        </div>
  );
};

export default AuthLayout;
