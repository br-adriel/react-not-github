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
      <h4>Paula Fernandes</h4>
      <S.FadedText>1702 Tweets</S.FadedText>
    </S.Wrapper>
  );
};

export default TrendingTopic;
