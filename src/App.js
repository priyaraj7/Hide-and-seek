import React from "react";
import Header from "./UI/Header";
import "./App.css";
import SquareCardList from './components/CardList';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <SquareCardList />
      </div>
    </React.Fragment>
  );
}

export default App;
