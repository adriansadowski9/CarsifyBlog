import InputLabel from '../Input/InputLabel';
import ChevronContainer from './styled/ChevronContainer';
import ChoosedCategory from './styled/ChoosedCategory';
import SelectDropdown from './styled/SelectDropdown';
import SelectOption from './styled/SelectOption';
import SelectWrapper from './styled/SelectWrapper';

import * as React from 'react';

import ChevronDown from '@assets/icons/chevronDown.svg';
interface SelectProps {
  width?: string;
  name?: string;
  label?: string;
  height?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}
const Select: React.FC<SelectProps> = ({ width, height = '72px', name, label }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('Auta');
  const selectRef = React.useRef<HTMLDivElement>(null);
  const changeCategory = (e: { currentTarget: { innerText: React.SetStateAction<string> } }) => {
    setSelectedCategory(e.currentTarget.innerText);
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
    <>
      <SelectWrapper ref={selectRef}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <ChoosedCategory
          width={width}
          height={height}
          id={name}
          name={name}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedCategory}
          <ChevronContainer isOpen={isOpen}>
            <ChevronDown width="24px" height="12px" />
          </ChevronContainer>
        </ChoosedCategory>
        <SelectDropdown isOpen={isOpen}>
          <SelectOption
            onClick={(e: { currentTarget: { innerText: React.SetStateAction<string> } }) =>
              changeCategory(e)
            }
          >
            Ogloszenia
          </SelectOption>
          <SelectOption
            onClick={(e: { currentTarget: { innerText: React.SetStateAction<string> } }) =>
              changeCategory(e)
            }
          >
            Promo
          </SelectOption>
          <SelectOption
            onClick={(e: { currentTarget: { innerText: React.SetStateAction<string> } }) =>
              changeCategory(e)
            }
          >
            Artykuły
          </SelectOption>
        </SelectDropdown>
      </SelectWrapper>
    </>
  );
};

export default Select;
