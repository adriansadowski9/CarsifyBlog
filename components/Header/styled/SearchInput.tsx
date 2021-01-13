import * as React from 'react';
import { ThemeContext } from 'styled-components';

import InputComponent from '@components/Contact/Input/InputComponent';
import { Theme } from '@utils/theme';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  isSearchOpened: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyUp,
  inputRef,
  isSearchOpened,
}) => {
  const themeContext: Theme = React.useContext(ThemeContext);

  return (
    <InputComponent
      ref={inputRef}
      name="search"
      type="text"
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder="Wyszukaj w Carsify..."
      customHeight={70}
      customPaddingBottom={themeContext.spaces.xxs}
      isSearchOpened={isSearchOpened}
      useBiggerFontForDesktop
    />
  );
};

export default SearchInput;
