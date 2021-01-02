import * as React from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';

import Icon from '@components/Icon';
import IconInfoContainer from '@components/Post/styled/IconInfoContainer';
import IconInfoIconContainer from '@components/Post/styled/IconInfoIconContainer';
import IconInfoLink from '@components/Post/styled/IconInfoLink';
import IconInfoText from '@components/Post/styled/IconInfoText';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';

interface IconInfo {
  text: string;
  iconName: IconName;
  href?: string;
  slug?: string;
}

const IconInfo: React.FC<IconInfo> = ({ text, iconName, href, slug }) => {
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
      {href && slug ? (
        <Link href={href} as={slug} passHref>
          <IconInfoLink>{text}</IconInfoLink>
        </Link>
      ) : (
        <IconInfoText>{text}</IconInfoText>
      )}
    </IconInfoContainer>
  );
};

export default IconInfo;
