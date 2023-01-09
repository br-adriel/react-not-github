import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }: { theme: Theme }) => theme.bg};
  position: relative;

  form {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  margin: 4px 0;
  background: ${({ theme }: { theme: Theme }) => theme.bg2Hover};
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 30px;
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  gap: 12px;
  border: 1px solid transparent;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  :focus-within {
    background: ${({ theme }: { theme: Theme }) => theme.bg};
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.accent};

    svg {
      color: ${({ theme }: { theme: Theme }) => theme.accent};
    }
  }

  input {
    outline: none;
    flex-grow: 1;
    font-size: 1rem;
    border: none;
    background: inherit;
  }

  input:placeholder-shown + div {
    button {
      display: none;
    }
  }

  svg {
    font-size: 20px;
  }
`;

export const ResetButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 12px;
  display: flex;
  align-items: center;
  height: 100%;

  button[type='reset'] {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
