import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, MaterialIcon } from '../atoms';
import { Theme } from '../types/Theme';

interface SearchBarContainerProps {
  theme: Theme;
}

const SearchBarContainer = styled.div<SearchBarContainerProps>`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: black;
  height: 30px;
  padding: 3px 5px;
  border: solid 1px #4b5563;
  border-radius: 5px;

  & > ${Input} {
    flex: 1;
    padding: 0;
    margin: 0;
    border: 0;
    border: none;
    color: black;
    background-color: transparent;
  }

  & > i {
    cursor: pointer;
  }
`;

interface SearchBarProps {
  placeholder?: string;
  onChange?(value: string): void;
}

export const SearchBar: FC<SearchBarProps> = ({ placeholder, onChange }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (onChange) {
      onChange(query);
    }
  }, [onChange, query]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const onClearClick = () => {
    setQuery('');
  };

  return (
    <SearchBarContainer>
      <Input type='search' placeholder={placeholder} onChange={onInputChange} value={query} />
      {query && <MaterialIcon name='close' onClick={onClearClick} />}
    </SearchBarContainer>
  );
};
