import { Theme } from '../../global/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Heading = styled.div`
  background: ${({ theme }: { theme: Theme }) => `${theme.bg}aa`};
  backdrop-filter: blur(10px);
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 2;
  top: 0;
  border-bottom: 1px solid #ddd;

  h2 {
    font-size: 1.2rem;
    font-weight: 600px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
`;

export const Settings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  display: flex;

  :hover {
    background: ${({ theme }: { theme: Theme }) => `${theme.text}11`};
    border-radius: 50%;
  }

  a {
    justify-content: center;
    align-items: center;
    display: flex;
    color: inherit;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
