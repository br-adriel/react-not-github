import AsideWhatsHappening from '../../../components/AsideWhatsHappening';
import AsideWhoToFollow from '../../../components/AsideWhoToFollow';
import * as S from './style';

const Aside = () => {
  return (
    <S.Wrapper>
      <AsideWhatsHappening />
      <S.Sticky>
        <AsideWhoToFollow />
      </S.Sticky>
    </S.Wrapper>
  );
};

export default Aside;
