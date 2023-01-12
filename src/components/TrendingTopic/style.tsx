import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div<{ isOnSidebar: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  padding-bottom: 12px;
  cursor: pointer;

  background: ${({
    isOnSidebar,
    theme,
  }: {
    isOnSidebar: boolean;
    theme: Theme;
  }) => (isOnSidebar ? theme.bg2 : theme.bg)};

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: -5px;
    margin-bottom: 3px;
  }

  :hover {
    background: ${({ theme }: { theme: Theme }) => theme.bg2Hover};
  }
`;

export const FadedText = styled.p`
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  font-size: 0.85rem;
`;

export const Subject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease;

    :hover {
      background: ${({ theme }: { theme: Theme }) => theme.accentHover};

      svg {
        color: ${({ theme }: { theme: Theme }) => theme.accent};
      }
    }
  }

  svg {
    width: 19px;
    height: 19px;
  }
`;
