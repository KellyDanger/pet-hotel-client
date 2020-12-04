import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [placeholder, setPlaceholder] = useState('Not Connected');
  // const [newPet, setPet] = useState('No Pet For You');

  useEffect(() => {
    fetch('/pets').then(res => res.json()).then(data => {
      setPlaceholder(data.result);
    });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Flask says {placeholder[0][1]}</p>
      </header> */}
      <h1>Submit Your Pet</h1>

      <form className="form">

        <label htmlFor="nameInput">Name:</label>
        <input id="nameInput"/>
        <br/>
        <label htmlFor="ownerInput">Owner ID:</label>
        <input id="ownerInput" type="number"/>
        <br/>
        <label htmlFor="breedInput">Breed:</label>
        <input id="breedInput"/>
        <br/>
        <label htmlFor="colorInput">Color:</label>
        <input id="colorInput"/>
        <br/>
        <label htmlFor="checkInInput">Checked In Status:</label>
        <input id="checkInInput" type="boolean" defaultValue="true"/>
        <br/>
        <label htmlFor="dateInput">Check In Date:</label>
        <input id="dateInput" type="date"/>

        <button>Submit</button>

      </form>

      <h2>Pets in Zootopia Hotel</h2>

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
            "Yes"
            :
            "No"}</td>
            <td>{placeholder[0][6]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;