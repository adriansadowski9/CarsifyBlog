import * as React from 'react';

import SectionNameContainer from '@components/Sections/styled/SectionNameContainer';
import SectionNameText from '@components/Sections/styled/SectionNameText';

interface SectionNameProps {
  name: string;
  gridColumn?: string;
  altTextTag?: string;
}

const SectionName: React.FC<SectionNameProps> = ({ name, gridColumn, altTextTag }) => (
  <SectionNameContainer gridColumn={gridColumn}>
    <SectionNameText as={altTextTag}>{name}</SectionNameText>
  </SectionNameContainer>
);

export default SectionName;
