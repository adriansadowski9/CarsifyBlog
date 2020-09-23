import InputLabel from '../Input/InputLabel';
import ChevronContainer from './styled/ChevronContainer';
import ChosenCategory from './styled/ChosenCategory';
import SelectButton from './styled/SelectButton';
import SelectDropdown from './styled/SelectDropdown';
import SelectOption from './styled/SelectOption';
import SelectWrapper from './styled/SelectWrapper';

import * as React from 'react';
import { ThemeContext } from 'styled-components';

import ChevronDown from '@assets/icons/chevronDown.svg';
import { Theme } from '@utils/theme';
interface ItemsProps {
  id: number;
  value: string;
}
interface SelectProps {
  width?: string;
  name: string;
  label: string;
  height?: string;
  items: ItemsProps[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}
const Select: React.FC<SelectProps> = ({
  width = '100%',
  height = '72px',
  name,
  label,
  items,
  selectedCategory,
  setSelectedCategory,
}) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const selectRef = React.useRef<HTMLDivElement>(null);
  const changeCategory = (value: string) => {
    setSelectedCategory(value);
    setIsOpen(!isOpen);
  };
  const closeOnClickOutside = (e) => {
    if (selectRef && selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('click', closeOnClickOutside);

    return () => window.removeEventListener('click', closeOnClickOutside);
  }, []);
  return (
    <SelectWrapper ref={selectRef}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <ChosenCategory
        width={width}
        height={height}
        id={name}
        name={name}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCategory}
        <ChevronContainer isOpen={isOpen}>
          <ChevronDown width="24px" height="12px" fill={themeContext.colors.text} />
        </ChevronContainer>
      </ChosenCategory>
      <SelectDropdown isOpen={isOpen}>
        {items.map((item) => (
          <SelectOption key={item.id}>
            <SelectButton type="button" onClick={() => changeCategory(item.value)}>
              {item.value}
            </SelectButton>
          </SelectOption>
        ))}
      </SelectDropdown>
    </SelectWrapper>
  );
};

export default Select;
