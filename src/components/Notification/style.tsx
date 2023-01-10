import styled from 'styled-components';
import { NotificationType } from '../../global/types';

export const Wrapper = styled.div<{ type: NotificationType }>`
  padding: 12px 16px;
  display: flex;
  border-bottom: 1px solid #ddd;
  ${(props) => (props.type === 'response' ? `padding-bottom: 4px;` : null)};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-bottom: 12px;

    img {
      border-radius: 50%;
    }
  }
`;

export const NotificationText = styled.p`
  a {
    font-weight: 700;
    color: inherit;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;
