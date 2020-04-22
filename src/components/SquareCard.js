import React from 'react';

function SquareCard(props) {
  return (
      <React.Fragment>
        <div className="card-wrapper grid-item">
          <img src={props.imageName} alt="" id="show-image" className="card-image"/>
          {/* <p id="show-text">{props.text}</p> */}
        </div>
      </React.Fragment>
  );
}
// function Card(props) {
//   return (
//     <React.Fragment>
//       <div className="card-wrapper" onClick={props.toggle}>
//         <img src={props.imageName} alt="" className="card-image" />
//       </div>
//     </React.Fragment>
//   );
// }

export default SquareCard;