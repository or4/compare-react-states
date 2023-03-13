import React from "react";

import EasyComp from "./components/easy-comp";
import MstComp from "./components/mst-comp";
import ReactComp from "./components/react-comp";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {false && <ReactComp />}
        {true && <MstComp />}

        {false && <EasyComp />}
      </header>
    </div>
  );
};

export default App;
