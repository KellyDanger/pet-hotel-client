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
      <header className="App-header">
        <p>Flask says {placeholder[0][1]}</p>
      </header>
    </div>
  );
}

export default App;
