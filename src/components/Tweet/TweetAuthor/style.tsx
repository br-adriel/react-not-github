import styled from 'styled-components';

export const Author = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    gap: 4px;
    align-items: center;
    max-width: 100%;

    a {
      font-weight: 600;
    }

    span {
      display: flex;
      align-items: center;
      opacity: 0.75;
    }
  }
`;
