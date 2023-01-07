import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }: { theme: Theme }) => theme.bg2};
  flex-grow: 1;
  border-radius: 16px;
  max-width: 350px;

  h3 {
    padding: 16px;
    padding-bottom: 8px;
    border-radius: 16px 16px 0 0;
  }

  & > a {
    padding: 12px 16px;
    border-radius: 0 0 16px 16px;
    text-decoration: none;
    color: ${({ theme }: { theme: Theme }) => theme.accent};
    font-size: 0.95rem;

    :hover {
      background: ${({ theme }: { theme: Theme }) => theme.bg2Hover};
    }
  }
`;
