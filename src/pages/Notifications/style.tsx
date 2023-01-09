import { Theme } from '../../global/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Heading = styled.div`
  background: ${({ theme }: { theme: Theme }) => `${theme.bg}aa`};
  backdrop-filter: blur(10px);
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 2;
  top: 0;
  border-bottom: 1px solid #ddd;

  h2 {
    font-size: 1.2rem;
    font-weight: 600px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
`;

export const Settings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  display: flex;

  :hover {
    background: ${({ theme }: { theme: Theme }) => `${theme.text}11`};
    border-radius: 50%;
  }

  a {
    justify-content: center;
    align-items: center;
    display: flex;
    color: inherit;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;

  .active {
    font-weight: 700;
    opacity: 1;

    & > div > div {
      display: block;
    }
  }

  a {
    text-align: center;
    text-decoration: none;
    color: inherit;
    opacity: 0.75;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      position: relative;
      padding: 16px 0;

      & > div {
        background: ${({ theme }: { theme: Theme }) => `${theme.accent}`};
        height: 4px;
        border-radius: 4px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
        display: none;
      }
    }

    :hover {
      background: ${({ theme }: { theme: Theme }) => `${theme.bgHover}`};
    }
  }
`;
