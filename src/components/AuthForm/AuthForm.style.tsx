import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  h2 {
    font-size: 28px;
  }

  button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    outline: none;
    border: none;
    padding: 10px;
    font-weight: 600;
    font-size: 14px;
    margin: 10px 0;
    gap: 4px;
    background-color: #fff;
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};

    :hover {
      opacity: 0.8;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  > p {
    font-size: 14px;
    margin-top: 30px;

    a {
      color: ${({ theme }: { theme: Theme }) => theme.accent};
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }

  input {
    width: 100%;
    margin-top: 16px;
    padding: 12px 8px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};

    :focus {
      outline-color: ${({ theme }: { theme: Theme }) => theme.accent};

      ::placeholder {
        color: ${({ theme }: { theme: Theme }) => theme.accent};
      }
    }
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  hr {
    flex-grow: 1;
    size: 3;
  }
`;
