import styled from 'styled-components';
import { Theme } from '../global/types';

const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }: { theme: Theme }) => theme.bg2};
  border-radius: 16px;
  width: 100%;

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

export default AsideWrapper;
