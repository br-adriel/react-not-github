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
