import React from "react";
import Header from "./components/header";
//import Market from "./components/MarketControl";
// import CardList from "./components/CardList";
import "./App.css";
import Card2 from "./components/Card2";
import TestGiraffeControl from "./components/TestGiraffeControl";
// import TestCard from "./components/TestCard";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        {/* <Card2 /> */}
        {/* <TestCard imageName="giraffe" /> */}
        <TestGiraffeControl />
      </div>
    </React.Fragment>
  );
}

export default App;
