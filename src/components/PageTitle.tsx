import styled from 'styled-components';
import { Theme } from '../global/types';

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  width: 100%;

  h2 {
    flex-grow: 1;
  }
`;

export const Icon = styled.div`
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
