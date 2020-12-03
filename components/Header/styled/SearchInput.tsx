import * as React from 'react';
import { ThemeContext } from 'styled-components';

import InputComponent from '@components/Contact/Input/InputComponent';
import { Theme } from '@utils/theme';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const themeContext: Theme = React.useContext(ThemeContext);

  return (
    <InputComponent
      name="search"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Wyszukaj w Carsify..."
      customPaddingBottom={themeContext.spaces.s}
      useBiggerFont
    />
  );
};

export default SearchInput;
