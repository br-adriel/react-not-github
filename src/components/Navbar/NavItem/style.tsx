import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s all ease;

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
