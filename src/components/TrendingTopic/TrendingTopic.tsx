import { BsThreeDots } from 'react-icons/bs';
import * as S from './style';

const TrendingTopic = ({ sidebar = true }) => {
  return (
    <S.Wrapper isOnSidebar={sidebar}>
      <S.Subject>
        <S.FadedText>Assuntos do momento</S.FadedText>
        <a href='#' title='Menu'>
          <BsThreeDots />
        </a>
      </S.Subject>
      <h4>Lorem ipsum</h4>
      <S.FadedText>{Math.floor(Math.random() * 95) + 5} mil tweets</S.FadedText>
    </S.Wrapper>
  );
};

export default TrendingTopic;
