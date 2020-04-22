import React from "react";
import Header from "./components/Header";
import "./App.css";
import AnimalControl from "./components/AnimalControl";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <AnimalControl />
      </div>
    </React.Fragment>
  );
}

export default App;
