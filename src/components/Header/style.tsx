import styled from 'styled-components';
import { Theme } from '../../global/types';

export const HeaderTag = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 4px 2px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s all ease;

  :hover {
    background: ${({ theme }: { theme: Theme }) => `${theme.text}11`};
  }

  img {
    border-radius: 50%;
  }
`;

export const Brand = styled.div`
  padding: 12px;
  color: ${({ theme }: { theme: Theme }) => theme.accent};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${({ theme }: { theme: Theme }) => theme.accentHover};
  }

  a,
  svg {
    color: inherit;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;
