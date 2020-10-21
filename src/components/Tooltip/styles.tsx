import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .img-fluid {
    width: 100%;
  }

  > div {
    box-shadow: 0 4px 8px 0 rgb(90 90 90 / 10%);
    width: 200px;
    background: #566B84;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    -webkit-transition: opacity 0.4s;
    -webkit-transition: opacity 0.4s;
    -webkit-transition: opacity 0.4s;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(60% + 12px);
    left: 70%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    color: #fff;
    z-index: 1000;

    div {
      display: flex;

      strong {
        margin-right: 10px;
      }
    }

    &:nth-child(4) {
        margin-bottom: 10px;
    }

    a {
      color: #fff;
      background-color: #00a9f3;;
      font-size: 16px;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }

    &::before {
      content: '';
      border-style: solid;
      border-color: #566B84 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

  }

  &:hover > div {
    opacity: 100;
    visibility: visible;
  }
`;
