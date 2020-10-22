import * as React from 'react';

import SectionNameContainer from '@components/Sections/styled/SectionNameContainer';
import SectionNameText from '@components/Sections/styled/SectionNameText';

interface SectionNameProps {
  name: string;
  gridColumn?: string;
}

const SectionName: React.FC<SectionNameProps> = ({ name, gridColumn }) => (
  <SectionNameContainer gridColumn={gridColumn}>
    <SectionNameText>{name}</SectionNameText>
  </SectionNameContainer>
);

export default SectionName;
