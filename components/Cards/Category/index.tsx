import * as React from 'react';

import CategoryContainer from '@components/Cards/Category/styled/CategoryContainer';
import CategoryIconContainer from '@components/Cards/Category/styled/CategoryIconContainer';
import CategoryName from '@components/Cards/Category/styled/CategoryName';
import Icon from '@components/Icon';
import IconName from '@utils/iconNames';

interface CategoryProps {
  name: string;
  iconName: IconName;
  nameColor: string;
  bgColor: string;
  iconColor: string;
}
const Category: React.FC<CategoryProps> = ({ name, iconName, nameColor, bgColor, iconColor }) => (
  <CategoryContainer>
    <CategoryName categoryColor={nameColor}>{name}</CategoryName>
    <CategoryIconContainer backgroundColor={bgColor} iconColor={iconColor}>
      <Icon iconName={iconName} variant="flat" width="16px" height="16px" fill={iconColor} />
    </CategoryIconContainer>
  </CategoryContainer>
);

export default Category;
