import styled from 'styled-components';
import { Container600px } from '../../components/Container';
import { Theme } from '../../global/types';
import HorizontalNavigation from '../../components/HorizontalNavigation';
import TrendingTopic from '../../components/TrendingTopic';

export const Trending = styled(TrendingTopic)`
  background: ${({ theme }: { theme: Theme }) => theme.bg};
`;

export const Navigation = styled(HorizontalNavigation)`
  justify-content: flex-start;

  > a {
    flex-grow: 0;
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  gap: 16px;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
`;

export const SettingsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background: ${({ theme }: { theme: Theme }) => theme.bgHover};
  }

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    outline: none;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Container = styled(Container600px)`
  min-height: 100vh;
  flex-direction: column;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  padding-bottom: 100px;
`;
