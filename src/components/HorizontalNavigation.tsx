import styled from 'styled-components';
import { Theme } from '../global/types';

const HorizontalNavigation = styled.nav`
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

export default HorizontalNavigation;
