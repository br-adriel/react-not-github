import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import { Theme } from '../../global/types';

interface Props {
  tweetsCount: number;
  displayName: string;
}

const StickyTop = ({ displayName, tweetsCount }: Props) => {
  return (
    <Wrapper>
      <BackButton />
      <Content>
        <h2>{displayName}</h2>
        <p>
          {tweetsCount} Tweet{tweetsCount !== 1 && 's'}
        </p>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 8px 4px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  background-color: ${({ theme }: { theme: Theme }) => `${theme.bg}bb`};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 200;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h2 {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  }
`;

export default StickyTop;
