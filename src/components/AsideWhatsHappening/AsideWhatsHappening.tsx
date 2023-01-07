import TrendingTopic from '../TrendingTopic/TrendingTopic';
import * as S from './style';

const AsideWhatsHappening = () => {
  return (
    <S.Wrapper>
      <h3>O que está acontecendo</h3>
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <a href=''>Mostrar mais</a>
    </S.Wrapper>
  );
};

export default AsideWhatsHappening;
