import React from 'react';

function SquareCard(props) {
  return (
    <React.Fragment>
      <div className="card-wrapper">
        <img src={props.imageName} alt="" />
        <p>{props.text}</p>
      </div>
    </React.Fragment>
  )
}

export default SquareCard;