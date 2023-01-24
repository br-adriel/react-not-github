import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  border-top: none;
  width: 100%;

  & > img {
    border-radius: 50%;
  }
`;
