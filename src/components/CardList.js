import React from "react";
import SquareCard from "./SquareCard";
import alligator from './../assets/alligator.png';
import monkey from './../assets/monkey.png';
import pandabear from './../assets/pandabear.png';

const animalObjects = [
  {
    imageName: alligator,
    text: "Alligator"
  },
  {
    imageName: monkey,
    text: "Monkey"
  },
  {
    imageName: pandabear,
    text: "Panda Bear"
  }
];

function SquareCardList() {
  return (
    <React.Fragment>
      {animalObjects.map((animal, index) => (
        <SquareCard 
          imageName={animal.imageName}
          text={animal.text}
          key={index} />
      ))}
    </React.Fragment>
  );
}

export default SquareCardList;
