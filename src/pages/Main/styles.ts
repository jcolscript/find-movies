import styled from 'styled-components';

interface ISearchBoxProps {
  searchBoxUp?: boolean;
}

export const SearchBox = styled.div<ISearchBoxProps>`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.3s linear;
  top: 50%;
  z-index: 1000
`;
