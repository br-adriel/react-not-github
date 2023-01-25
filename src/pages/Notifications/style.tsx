import { Theme } from '../../global/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Heading = styled.div`
  background: ${({ theme }: { theme: Theme }) => `${theme.bg}aa`};
  backdrop-filter: blur(10px);
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 2;
  top: 0;
  border-bottom: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};

  h2 {
    font-size: 1.2rem;
    font-weight: 600px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  border-left: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  height: 100%;
`;
