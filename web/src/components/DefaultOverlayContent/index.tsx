import React from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
  lable: string
  description: string
}

const DefaultOverlayContent: React.FC<Props> = ({ lable, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{lable}</h1>
        <h2>{description}</h2>
      </Heading>
      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existent Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
