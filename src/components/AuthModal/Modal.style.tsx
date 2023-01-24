import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  background-color: #2225;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Content = styled(Dialog.Content)`
  background-color: ${({ theme }: { theme: Theme }) => theme.bg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  display: relative;
  top: 0px;
  left: 0px;
  padding: 10px;
  width: min(100%, 400px);
  margin: 16px 0;
`;

export const Header = styled.div`
  display: flex;
  min-width: 350px;
  position: relative;
  justify-content: center;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    object-fit: contain;
    margin-top: 4px;
  }

  button {
    position: absolute;
    top: 0px;
    left: 0px;
    background: none;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;

    svg {
      margin-top: 0;
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    :hover {
      background-color: #0002;
      border-radius: 50%;
    }
  }
`;
