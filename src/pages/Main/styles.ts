import styled,{ css } from 'styled-components';

interface ISearchBoxProps {
  searchBoxUp?: boolean;
}

export const SearchBox = styled.div<ISearchBoxProps>`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.3s linear;
  top: 50%;

  /* ${props =>
    props.searchBoxUp ? css`top: 5% !important;` : css`top: 50% !important;`} */
`;
