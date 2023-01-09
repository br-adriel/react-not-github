import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  border: 1px solid #eee;
  border-top: none;
  border-bottom: none;
  position: sticky;
  top: 0;
  background: ${({ theme }: { theme: Theme }) => `${theme.bg}aa`};
  backdrop-filter: blur(10px);
  z-index: 1;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  & > div,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    border-radius: 50%;
    padding: 10px;

    :hover {
      background: ${({ theme }: { theme: Theme }) => `${theme.text}11`};
    }
  }

  a,
  svg {
    color: inherit;
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
