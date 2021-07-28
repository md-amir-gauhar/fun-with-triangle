import React from 'react';

import { Link } from 'react-router-dom';

import '../App.css'

const Quiz = () => {
  return (
    <div className="app">
      <div className="container">
        <Link to="/" className="back"><i className="fas fa-chevron-left"></i>Go back</Link>
        <h1 className="title">
          What angles (in degrees) form a triangle?
        </h1>
      </div>
    </div>
  )
}

export default Quiz
