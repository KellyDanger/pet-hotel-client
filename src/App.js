import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [placeholder, setPlaceholder] = useState('Not Connected');

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setPlaceholder(data.result);
      console.log(data.result[0]);
    });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Flask says {placeholder[0][1]}</p>
      </header> */}
      <h2>Pets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Breed</th>
            <th>Color</th>
            <th>Checked In?</th>
            <th>Checked In Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{placeholder[0][1]}</td>
            <td>{placeholder[0][2]}</td>
            <td>{placeholder[0][3]}</td>
            <td>{placeholder[0][4]}</td>
            <td>{placeholder[0][5]?
            "Purple"
            :
            "Red"}</td>
            <td>{placeholder[0][6]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;