import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 1100px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    min-height: 100vh;

    > div:last-of-type {
      max-width: 320px;

      > h3,
      p {
        padding: 0 16px;
      }

      > h3 {
        font-size: 1.75rem;
        margin-top: 30px;
      }

      p {
        color: ${({ theme }: { theme: Theme }) => theme.textAlt};
        font-size: 14px;
        margin: 10px 0;
      }
    }
  }

  @media screen and (min-width: 1020px) {
    width: 320px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const Messages = styled.div`
  display: none;
  border-right: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  div {
    max-width: 336px;
    margin: 20px auto;

    h3 {
      font-size: 2rem;
    }

    p {
      color: ${({ theme }: { theme: Theme }) => theme.textAlt};
      margin-top: 10px;
      font-size: 0.9rem;
    }

    button {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1020px) {
    display: flex;
    flex-grow: 1;
  }
`;

export const Button = styled.button`
  margin: 15px 20px;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 30px;
  padding: 16px;
  background-color: ${({ theme }: { theme: Theme }) => theme.accent};
  color: ${({ theme }: { theme: Theme }) => theme.text};
  border: none;
  outline: none;

  :hover {
    opacity: 0.9;
  }
`;
