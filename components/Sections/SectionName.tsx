import * as React from 'react';

import SectionNameContainer from '@components/Sections/styled/SectionNameContainer';
import SectionNameText from '@components/Sections/styled/SectionNameText';

interface SectionNameProps {
  name: string;
  altTextTag?: string;
}

const SectionName: React.FC<SectionNameProps> = ({ name, altTextTag }) => (
  <SectionNameContainer>
    <SectionNameText as={altTextTag}>{name}</SectionNameText>
  </SectionNameContainer>
);

export default SectionName;
