import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};

  & > div {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 0.9rem;

    :hover {
      color: ${({ theme }: { theme: Theme }) => theme.accent};

      div {
        background: ${({ theme }: { theme: Theme }) => theme.accentHover};
      }
    }

    :nth-of-type(3):hover {
      color: ${({ theme }: { theme: Theme }) => theme.retweet};

      div {
        background: ${({ theme }: { theme: Theme }) => theme.retweetHover};
      }
    }

    :nth-of-type(4):hover {
      color: ${({ theme }: { theme: Theme }) => theme.like};

      div {
        background: ${({ theme }: { theme: Theme }) => theme.likeHover};
      }
    }

    div {
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    p {
      margin-left: -4px;
    }
  }

  svg {
    width: 19px;
    height: 19px;
  }
`;
