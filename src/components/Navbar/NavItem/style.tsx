import styled from 'styled-components';
import { Theme } from '../../../global/types';

interface IProps {
  hideSmall: boolean;
  hideLarge: boolean;
}

export const Wrapper = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s all ease;
  ${(props) =>
    !props.hideSmall
      ? null
      : `@media screen and (max-width: 1020px) {
    display: none;
  }
    `}
  ${(props) =>
    !props.hideLarge
      ? null
      : `@media screen and (min-width: 1021px) {
    display: none;
  }
    `}

  :hover {
    background: ${({ theme }: { theme: Theme }) => `${theme.text}11`};
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;

    svg {
      width: 27px;
      height: 27px;
    }
  }
`;
