import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.p`
  display: flex;
  border: 1px solid #eee;
  width: 100%;
  flex-direction: column;
  padding: 6px;
`;

export const Interaction = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  padding: 4px;
  margin-bottom: 4px;
  align-items: center;
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  font-weight: 600;
  font-size: 0.9rem;

  svg {
    justify-self: end;
  }
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
`;

export const Content = styled.div`
  padding: 0 4px;
  display: flex;
  gap: 12px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Author = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    gap: 4px;
    align-items: center;

    a {
      font-weight: 600;
    }

    span {
      display: flex;
      align-items: center;
      opacity: 0.75;
    }
  }
`;

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
