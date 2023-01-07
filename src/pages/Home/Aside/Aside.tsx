import AsideWhatsHappening from '../../../components/AsideWhatsHappening';
import AsideWhoToFollow from '../../../components/AsideWhoToFollow';
import Footer from '../../../components/Footer';
import SearchForm from '../../../components/SearchForm';
import * as S from './style';

const Aside = () => {
  return (
    <S.Wrapper>
      <S.Sticky top='0px'>
        <SearchForm />
      </S.Sticky>
      <AsideWhatsHappening />
      <S.Sticky top='54px'>
        <AsideWhoToFollow />
        <Footer />
      </S.Sticky>
    </S.Wrapper>
  );
};

export default Aside;
