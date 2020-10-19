import * as React from 'react';

import SectionNameContainer from '@components/Sections/styled/SectionNameContainer';
import SectionNameText from '@components/Sections/styled/SectionNameText';

interface SectionNameProps {
  name: string;
  indexPage?: boolean;
}

const SectionName: React.FC<SectionNameProps> = ({ name, indexPage }) => (
  <SectionNameContainer indexPage={indexPage}>
    <SectionNameText>{name}</SectionNameText>
  </SectionNameContainer>
);

export default SectionName;
