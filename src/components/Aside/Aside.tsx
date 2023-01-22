import AsideWhatsHappening from '../AsideWhatsHappening';
import AsideWhoToFollow from '../AsideWhoToFollow';
import Footer from '../Footer';
import SearchForm from '../SearchForm';
import SidebarWrapper from '../SidebarWrapper';
import * as S from './style';

const Aside = () => {
  return (
    <SidebarWrapper>
      <S.Sticky top='0px'>
        <SearchForm />
      </S.Sticky>
      <AsideWhatsHappening />
      <S.Sticky top='54px'>
        <AsideWhoToFollow />
        <Footer />
      </S.Sticky>
    </SidebarWrapper>
  );
};

export default Aside;
