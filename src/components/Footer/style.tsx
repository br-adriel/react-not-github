import styled from 'styled-components';
import { Theme } from '../../global/types';

export const FooterTag = styled.footer`
  padding: 16px;
  font-size: 0.75rem;
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  display: flex;
  flex-direction: column;
  gap: 6px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`;
