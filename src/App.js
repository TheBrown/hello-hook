import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

const randomCat = () => axios.get("https://aws.random.cat/meow");

const App = () => {
  // use react UseState
  const [count, setCount] = useState(0);
  const [cat, setCat] = useState({});

  // use react useEffect
  useEffect(() => {
    randomCat().then(res => {
      setCat(res.data);
      console.log(res.data)
    });
  }, []);
  console.log("render >>>");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>You click {count} times</p>
        <button
          style={{ padding: "8px 16px", borderRadius: 4, fontSize: "1.25rem" }}
          onClick={() => setCount(count + 1)}
        >
          Click me!
        </button>
        <p>
          <img src={cat.file} alt="Cat" width="256" />
        </p>
      </header>
    </div>
  );
};

export default App;
