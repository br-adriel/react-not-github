import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 70vh;

  > div {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 16px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
      color: ${({ theme }: { theme: Theme }) => theme.textAlt};

      a {
        color: ${({ theme }: { theme: Theme }) => theme.text};
        font-weight: 600;
      }
    }

    img {
      width: 100%;
    }
  }
`;
