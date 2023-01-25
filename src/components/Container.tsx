import styled from 'styled-components';
import { Theme } from '../global/types';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const Container600px = styled.div`
  width: 100%;
  max-width: 600px;
  border-left: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  border-right: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
`;

export const Container320px = styled.div`
  width: 100%;
  max-width: 320px;
  border-left: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  border-right: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
`;

export const Container920px = styled.div`
  width: 100%;
  max-width: 920px;
`;

export default Container;
