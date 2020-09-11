import * as React from 'react';

import IconInfoContainer from '@components/Post/styled/IconInfoContainer';
import IconInfoIconContainer from '@components/Post/styled/IconInfoIconContainer';
import IconInfoText from '@components/Post/styled/IconInfoText';

interface IconInfo {
  text: string;
  iconName: string;
}

const IconInfo: React.FC<IconInfo> = ({ text, iconName }) => (
  <IconInfoContainer>
    <IconInfoIconContainer>{iconName}</IconInfoIconContainer>
    <IconInfoText>{text}</IconInfoText>
  </IconInfoContainer>
);

export default IconInfo;
