import { useState } from 'react'
import { Link } from 'react-router-dom';

import '../App.css'

const Area = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("Enter the inputs to find the area of triangle");

  const handleClick = () => {
    if (base <= 0 || height <= 0) {
      setResult('Please provide valid inputs');
    } else {
      setResult(`Resultant Area is: ${(1 / 2) * Number(base) * Number(height)}`);
    }
  }

  return (
    <div className="app">
      <div className="container">
        <Link to="/" className="back"><i className="fas fa-chevron-left"></i>Go back</Link>
        <h1 className="title">
          Area of Triangle
        </h1>
        <p className="text">Area = 1/2 * base * height
        </p>
        <div className="area_container">
          <div className="input_container">
            <span>height: </span>
            <input type="number" className="inputs" value={height} onChange={e => setHeight(e.target.value)} />
            <span>base: </span>
            <input type="number" className="inputs" value={base} onChange={e => setBase(e.target.value)} />
          </div>

          <button onClick={handleClick}>calculate</button>
          <p className="result">"{result}"</p>
        </div>
      </div>
    </div>
  )
}

export default Area
