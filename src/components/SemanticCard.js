import React from 'react';
import { Segment } from 'semantic-ui-react';
import lion from './../assets/lion.png';

function SemanticCard(props) {
  return  (
    <React.Fragment>
      <Segment>
        <h1>Test test</h1>
        <img src={lion} alt="" />
      </Segment>
    </React.Fragment>
  );
}

export default SemanticCard;