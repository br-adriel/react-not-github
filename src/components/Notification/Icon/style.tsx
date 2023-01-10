import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const Icon = styled.div`
  width: 52px;
  flex-grow: 0;
  display: flex;
  justify-content: flex-end;

  svg {
    width: 25px;
    height: 25px;
  }

  img {
    border-radius: 50%;
  }
`;

export const IconLike = styled(Icon)`
  svg {
    color: ${({ theme }: { theme: Theme }) => theme.like};
  }
`;
export const IconNotification = styled(Icon)`
  svg {
    color: ${({ theme }: { theme: Theme }) => theme.accent};
  }
`;
export const IconDevice = styled(Icon)`
  svg {
    color: ${({ theme }: { theme: Theme }) => theme.text};
  }
`;
