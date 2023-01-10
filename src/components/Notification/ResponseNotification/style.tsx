import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const ResponseTo = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};

  a {
    text-decoration: none;
    color: ${({ theme }: { theme: Theme }) => theme.accent};

    :hover {
      text-decoration: underline;
    }
  }
`;
