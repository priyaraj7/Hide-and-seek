import React from "react";
import Header from "./components/header";

import "./App.css";
import ImageList from "./components/ImageList";

//import TestGiraffeControl from "./components/TestGiraffeControl";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />

        <ImageList />
      </div>
    </React.Fragment>
  );
}

export default App;
