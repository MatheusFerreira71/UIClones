import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { ModelSection, ModelsWrapper } from '../Model/index';
import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven'
          ].map(section => (
            <ModelSection
              key={section}
              className="colored"
              modelName={section}
              overlayNode={
                <DefaultOverlayContent lable={section} description="Order Online for Delivery" />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
