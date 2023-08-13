// import React, { useState, useEffect } from 'react';

// function App() {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const initialValue = 21;
//     const subtractionAmount = 0.33;
//     const newResults = [];

//     let currentValue = initialValue;
//     for (let i = 0; i < 21; i++) {
//       newResults.push(currentValue.toFixed(2));
//       currentValue -= subtractionAmount;
//     }

//     setResults(newResults);
//   }, []);

//   return (
//     <div>
//       <p>Subtraction Results:</p>
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");

  const [inputValue1, setInputValue1] = useState("");



  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // setInputValue1(event.target.value)
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value)
  };

  // React.useEffect(() => {
  //   const additionAmount = "0.333";
  //   const repetitions = "21";
  //   const newResults = [];

  //   let currentValue = "0";

  //   let quantity = parseFloat(currentValue);

  //   let additionAmount1 = parseFloat(additionAmount);




  //   for (let i = 0; i < repetitions; i++) {
  //     quantity += additionAmount1;
  //     newResults.push(quantity.toFixed(3));
  //   }

  //   setResults(newResults);
  // }, []);

  const handleButtonClick = () => {

    const divide = inputValue / inputValue1

    const additionAmount = divide.toFixed(3);
    const repetitions = inputValue1;

    const newResults = [];
    let currentValue = "0";

    let quantity = parseFloat(currentValue);

    let additionAmount1 = parseFloat(additionAmount);

    for (let i = 0; i < repetitions; i++) {
      quantity += additionAmount1;
      newResults.push(quantity.toFixed(3));
    }


    setResults(newResults);


  };

  return (
    <div className="app">
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something"
      />

      <input
        type="number"
        value={inputValue1}
        onChange={handleInputChange1}
        placeholder="Enter something"
      />
      <button onClick={handleButtonClick}>Show</button>



      <div>
        <p>Subtraction Results:{ }</p>
        <ul>
          {results.map((result, index) => {

            return (


              <p key={index}> {index}:   {result}</p>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
export default App