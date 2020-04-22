import React from "react";
import TestCard from "./TestCard";
import giraffe from "../assets/giraffe.jpg";
import giraffeBack from "../assets/giraffe-back.jpg";

class TestGiraffeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giraffeVisible: true,
    };
  }

  toggleImage = () => {
    this.setState((prevState) => ({
      giraffeVisible: !prevState.giraffeVisible,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    if (this.state.giraffeVisible) {
      currentlyVisibleState = (
        <TestCard imageName={giraffe} toggle={this.toggleImage} />
      );
    } else {
      currentlyVisibleState = (
        <TestCard imageName={giraffeBack} toggle={this.toggleImage} />
      );
    }
    return (
      <React.Fragment>
        <div>{currentlyVisibleState}</div>
      </React.Fragment>
    );
  }
}

export default TestGiraffeControl;
