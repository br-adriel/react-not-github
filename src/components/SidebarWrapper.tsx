import styled from 'styled-components';

const SidebarWrapper = styled.section`
  flex-direction: column;
  flex-grow: 1;
  max-width: 350px;
  display: none;
  margin-left: 30px;

  @media screen and (min-width: 1021px) {
    display: flex;
  }
`;

export default SidebarWrapper;
