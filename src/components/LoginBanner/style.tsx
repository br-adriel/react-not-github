import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }: { theme: Theme }) => theme.accent};
  color: #fff;

  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TextContent = styled.div`
  display: none;
  flex-direction: column;

  @media screen and (min-width: 721px) {
    display: flex;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  button {
    padding: 8px 16px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    text-align: center;

    :hover {
      opacity: 0.85;
    }

    :first-of-type {
      background: ${({ theme }: { theme: Theme }) => theme.accent};
      color: #fff;
      border: 1px solid #fff;
    }

    :last-of-type {
      color: #000;
      background: #fff;
      border: 1px solid #fff;
    }

    @media screen and (max-width: 720px) {
      flex-grow: 1;
    }
  }

  @media screen and (max-width: 720px) {
    flex-grow: 1;
  }
`;
