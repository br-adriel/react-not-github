import styled from 'styled-components';

export const Wrapper = styled.section`
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
  max-width: 350px;
  display: none;

  @media screen and (min-width: 1021px) {
    display: flex;
  }
`;

export const Sticky = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
`;
