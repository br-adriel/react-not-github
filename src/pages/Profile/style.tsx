import styled from 'styled-components';
import { Container600px } from '../../components/Container';
import HorizontalNavigation from '../../components/HorizontalNavigation';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Container600 = styled(Container600px)`
  min-height: 100%;
`;

export const Content = styled.div`
  min-height: 100vh;
`;

export const UserBackground = styled.div`
  width: 100%;
  height: 150px;
  background: ${({ theme }: { theme: Theme }) => theme.accent};
`;

export const UserImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -15px;

  button {
    margin-right: 15px;
    padding: 8px 14px;
    border-radius: 30px;
    font-weight: 600;
    color: ${({ theme }: { theme: Theme }) => theme.text};
    background-color: ${({ theme }: { theme: Theme }) => theme.bg};
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.textAlt};

    :hover {
      opacity: 0.9;
    }
  }
`;

export const ProfilePic = styled.img`
  width: 25%;
  height: 25%;
  min-width: 64px;
  min-height: 64px;
  object-fit: contain;
  border-radius: 50%;
  position: relative;
  margin-top: -10%;
  margin-left: 5%;
  border: 5px solid ${({ theme }: { theme: Theme }) => theme.bg};
`;

export const UserStatistic = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;

  h2 {
    font-weight: 600;
    font-size: 20px;
  }

  h3 {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  }

  div:last-of-type {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-size: 14px;
      color: ${({ theme }: { theme: Theme }) => theme.textAlt};
    }

    p span {
      font-weight: 600;
      color: ${({ theme }: { theme: Theme }) => theme.text};
    }
  }
`;

export const Navigation = styled(HorizontalNavigation)`
  border-bottom: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};

  span {
    font-size: 0.95rem;
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
`;
