import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

// function FlashCard(props) {
//   return (
//     <Card
//       style={{
//         width: "18rem",
//         overflow: "hidden",
//         borderRadius: "15px",
//         marginTop: "15px",
//         marginBottom: "15px",
//       }}
//     >
//       <Card.Img variant="top" src={props.front} />
//       <p>
//         <em>{props.back}</em>
//       </p>
//     </Card>
//   );
// }
class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
  }
  render() {
    const handleClick = () => this.flip();
    return (
      <div onClick={handleClick}>
        <Card
          style={{
            width: "18rem",
            overflow: "hidden",
            borderRadius: "15px",
            marginTop: "15px",
            marginBottom: "15px",
            height: "28rem",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {!this.state.flipped && (
            <Card.Img
              variant="top"
              // style={{
              //   height: "28rem",
              // }}
              src={this.props.front}
            />
          )}
          {this.state.flipped && (
            <h1>
              <em>{this.props.back}</em>
            </h1>
          )}
        </Card>
      </div>
    );
  }

  flip() {
    this.setState({
      flipped: !this.state.flipped,
    });
  }
}

FlashCard.propTypes = {
  front: PropTypes.string,
  back: PropTypes.string,
};

export default FlashCard;
