import * as React from 'react';
import { ThemeContext } from 'styled-components';

import Icon from '@components/Icon';
import IconInfoContainer from '@components/Post/styled/IconInfoContainer';
import IconInfoIconContainer from '@components/Post/styled/IconInfoIconContainer';
import IconInfoText from '@components/Post/styled/IconInfoText';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';

interface IconInfo {
  text: string;
  iconName: IconName;
}

const IconInfo: React.FC<IconInfo> = ({ text, iconName }) => {
  const themeContext: Theme = React.useContext(ThemeContext);

  return (
    <IconInfoContainer>
      <IconInfoIconContainer>
        <Icon
          iconName={iconName}
          variant="flat"
          fill={themeContext.colors.iconInfoIcon}
          width="16px"
          height="16px"
        />
      </IconInfoIconContainer>
      <IconInfoText>{text}</IconInfoText>
    </IconInfoContainer>
  );
};

export default IconInfo;
