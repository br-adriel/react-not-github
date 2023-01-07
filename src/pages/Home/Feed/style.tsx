import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #eee;
  border-top: none;
  border-bottom: none;
  position: sticky;
  top: 0;
  background: ${({ theme }: { theme: Theme }) => `${theme.bg}a3`};
  backdrop-filter: blur(10px);
  mix-blend-mode: dark;
  z-index: 1;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Feed = styled.div`
  width: 100%;
  max-width: 600px;
`;
