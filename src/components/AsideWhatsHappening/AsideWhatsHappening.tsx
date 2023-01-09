import AsideWrapper from '../AsideWrapper';
import TrendingTopic from '../TrendingTopic/TrendingTopic';

const AsideWhatsHappening = () => {
  return (
    <AsideWrapper>
      <h3>O que está acontecendo</h3>
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <a href=''>Mostrar mais</a>
    </AsideWrapper>
  );
};

export default AsideWhatsHappening;
