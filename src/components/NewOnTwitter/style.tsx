import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  padding: 16px;
  border-radius: 16px;
  gap: 8px;

  h2 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.75rem;
    color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  }

  button {
    border-radius: 25px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    background: #fff;
    color: #000;
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
    word-spacing: 1px;

    svg {
      width: 19px;
      height: 19px;
    }

    :hover {
      opacity: 0.85;
    }
  }
`;
