import * as React from 'react';

import CategoryContainer from '@components/Cards/Category/styled/CategoryContainer';
import CategoryIconContainer from '@components/Cards/Category/styled/CategoryIconContainer';
import CategoryName from '@components/Cards/Category/styled/CategoryName';

interface CategoryProps {
  name: string;
  iconName: string;
  nameColor: string;
  bgColor: string;
  iconColor: string;
}
const Category: React.FC<CategoryProps> = ({ name, iconName, nameColor, bgColor, iconColor }) => (
  <CategoryContainer>
    <CategoryName color={nameColor}>{name}</CategoryName>
    <CategoryIconContainer backgroundColor={bgColor} iconColor={iconColor}>
      {iconName}
    </CategoryIconContainer>
  </CategoryContainer>
);

export default Category;
