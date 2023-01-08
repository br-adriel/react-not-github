import styled from 'styled-components';

export const Wrapper = styled.section`
  flex-direction: column;
  flex-grow: 1;
  max-width: 350px;
  display: none;
  margin-left: 30px;

  @media screen and (min-width: 1021px) {
    display: flex;
  }
`;

export const Sticky = styled.div<{ top: string }>`
  width: 100%;
  display: flex;
  position: sticky;
  flex-direction: column;
  top: ${(props) => props.top};
`;
