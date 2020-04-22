import React from "react";
import giraffe from "../assets/giraffe.jpg";

function Card() {
  return (
    <React.Fragment>
      <div className="card-wrapper">
        <img src={giraffe} alt="" />
      </div>
    </React.Fragment>
  );
}

export default Card;

// import React from "react";
// import Item from "./Item";
// import image1 from "../assets/1.jpg";
// import image2 from "../assets/2.jpg";
// import image3 from "../assets/3.jpg";
// import { CardDeck } from "react-bootstrap";

// const masterTicketList = [
//   {
//     names: "Giraffe",
//     location: image1,
//     issue: "Unique activities we can do together, led by a world of hosts",
//   },
//   {
//     names: "Monthly stays",
//     location: image2,
//     issue: "Make Airbnb your home, for stays of a month or longer.",
//   },
//   {
//     names: "Frontline stays",
//     location: image3,
//     issue: "Find or provide accomadation for COVID-19 responders.",
//   },
// ];

// function ItemList() {
//   return (
//     <React.Fragment>
//       <div padding="10px" margin="10px">
//         <hr />
//         <CardDeck>
//           {masterTicketList.map((ticket, index) => (
//             <Item
//               names={ticket.names}
//               location={ticket.location}
//               issue={ticket.issue}
//               key={index}
//             />
//           ))}
//         </CardDeck>
//       </div>
//     </React.Fragment>
//   );
// }

// export default ItemList;
