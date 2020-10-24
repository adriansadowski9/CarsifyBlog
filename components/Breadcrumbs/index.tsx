import * as React from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';

import BreadcrumbsContainer from '@components/Breadcrumbs/styled/BreadcrumbsContainer';
import BreadcrumbContainerItem from '@components/Breadcrumbs/styled/BreadcrumbsContainerItem';
import BreadcrumbsLink from '@components/Breadcrumbs/styled/BreadcrumbsLink';
import BreadcrumbsText from '@components/Breadcrumbs/styled/BreadcrumbsText';
import Icon from '@components/Icon';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';

export type BreadcrumbsItem = {
  name: string;
  link?: {
    href: string;
    as?: string;
  };
};

interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const themeContext: Theme = React.useContext(ThemeContext);

  return (
    <BreadcrumbsContainer>
      {items.map((item, index) => (
        <BreadcrumbContainerItem key={index} isLast={index < items.length - 1}>
          <>
            {item.link ? (
              <Link href={item.link.href} as={item.link.as} passHref>
                <BreadcrumbsLink>{item.name}</BreadcrumbsLink>
              </Link>
            ) : (
              <BreadcrumbsText>{item.name}</BreadcrumbsText>
            )}
            {index < items.length - 1 && (
              <Icon
                iconName={IconName.ChevronRight}
                width="8px"
                height="8px"
                variant="flat"
                fill={themeContext.colors.breadcrumbs}
              />
            )}
          </>
        </BreadcrumbContainerItem>
      ))}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
