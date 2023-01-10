import styled from 'styled-components';

export const Follower = styled.div`
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

export const FollowerName = styled.p`
  a {
    font-weight: 700;
    color: inherit;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;
