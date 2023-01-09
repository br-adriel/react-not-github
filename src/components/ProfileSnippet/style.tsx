import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  :hover {
    background: ${({ theme }: { theme: Theme }) => theme.bg2Hover};
  }

  button {
    background: ${({ theme }: { theme: Theme }) => theme.text};
    color: ${({ theme }: { theme: Theme }) => theme.bg};
    border-radius: 20px;
    padding: 6px 16px;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  img {
    border-radius: 50%;
  }
`;

export const Username = styled.p`
  font-weight: 600;
  text-overflow: ellipsis;
`;

export const UserHandle = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  text-overflow: ellipsis;
`;
