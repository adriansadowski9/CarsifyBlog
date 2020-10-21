import ChevronContainer from './styled/ChevronContainer';
import ChosenCategory from './styled/ChosenCategory';
import SelectButton from './styled/SelectButton';
import SelectDropdown from './styled/SelectDropdown';
import SelectSpan from './styled/SelectSpan';
import SelectWrapper from './styled/SelectWrapper';

import * as React from 'react';
import { ThemeContext } from 'styled-components';

import Icon from '@components/Icon';
import IconName from '@utils/iconNames';
import { Theme } from '@utils/theme';

interface SelectProps {
  width?: string;
  label: string;
  height?: string;
  name: string;
  items: {
    id: number;
    value: string;
  }[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  register: any;
  onChange: (e: { target: { name: string; value: string } }) => void;
}

const Select: React.FC<SelectProps> = ({
  height = '72px',
  label,
  items,
  name,
  selectedItem,
  setSelectedItem,
  register,
  onChange,
}) => {
  const themeContext: Theme = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const selectRef = React.useRef<HTMLDivElement>(null);
  const changeCategory = (value: string) => {
    setSelectedItem(value);
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
      <SelectSpan>{label}</SelectSpan>
      <ChosenCategory height={height} onClick={() => setIsOpen(!isOpen)}>
        {selectedItem}
        <ChevronContainer isOpen={isOpen}>
          <Icon
            iconName={IconName.ChevronDown}
            variant="flat"
            width="24px"
            height="24px"
            fill={themeContext.colors.text}
          />
        </ChevronContainer>
      </ChosenCategory>
      <SelectDropdown isOpen={isOpen}>
        {items.map((item) => (
          <li key={item.id}>
            <SelectButton
              type="button"
              onClick={() => changeCategory(item.value)}
              ref={register}
              onChange={onChange}
              name={name}
              value={selectedItem}
            >
              {item.value}
            </SelectButton>
          </li>
        ))}
      </SelectDropdown>
    </SelectWrapper>
  );
};

export default Select;
