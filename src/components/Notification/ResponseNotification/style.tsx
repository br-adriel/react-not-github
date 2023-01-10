import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const ResponseTo = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};

  a {
    text-decoration: none;
    color: ${({ theme }: { theme: Theme }) => theme.accent};
    font-weight: 500;

    :hover {
      text-decoration: underline;
    }
  }
`;
