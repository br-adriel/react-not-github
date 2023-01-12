import styled from 'styled-components';

export const Sticky = styled.div<{ top: string }>`
  width: 100%;
  display: flex;
  position: sticky;
  flex-direction: column;
  top: ${(props) => props.top};
`;
