import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className="errorPage">
      <div className="errorContainer">
        <h1 className="errorTitle">404</h1>
        <p className="errorMessage">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="homeButton">Go Back Home</Link>
      </div>
    </div>
  );
}
