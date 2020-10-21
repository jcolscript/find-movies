import styled, { keyframes } from 'styled-components';

const appearBotToTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  } to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearBotToTop} 1s;

  div {
    img {
      height: 440px;
    }
  }
`;
