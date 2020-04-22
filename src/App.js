import React from "react";
import Header from "./components/header";
//import Market from "./components/MarketControl";
import Card from "./components/Card";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <Card />
      </div>
    </React.Fragment>
  );
}

export default App;
