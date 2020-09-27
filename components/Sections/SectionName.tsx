import * as React from 'react';

import SectionNameContainer from '@components/Sections/styled/SectionNameContainer';
import SectionNameText from '@components/Sections/styled/SectionNameText';

interface SectionNameProps {
  name: string;
}

const SectionName: React.FC<SectionNameProps> = ({ name }) => (
  <SectionNameContainer>
    <SectionNameText>{name}</SectionNameText>
  </SectionNameContainer>
);

export default SectionName;
