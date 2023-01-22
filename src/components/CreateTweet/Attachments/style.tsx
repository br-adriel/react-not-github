import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const AddAttachment = styled.div`
  display: flex;
  align-items: center;

  & > div {
    padding: 8px;
    border-radius: 50%;

    :hover {
      background: ${({ theme }: { theme: Theme }) => theme.accentHover};
    }

    button {
      background: none;
      border: none;
      color: ${({ theme }: { theme: Theme }) => theme.accent};
      cursor: pointer;
      padding: 0;
      font-size: 1.15rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
