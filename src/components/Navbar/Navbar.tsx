import { AiFillBell, AiOutlineBell } from 'react-icons/ai';
import { BiHash, BiSearch } from 'react-icons/bi';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { HiMail, HiOutlineMail } from 'react-icons/hi';
import { RiHome7Fill, RiHome7Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/authSlice';
import NavItem from './NavItem';
import * as S from './style';

const Navbar = () => {
  const { user } = useSelector(selectAuth);
  return (
    <S.NavTag>
      {!user ? null : (
        <NavItem
          icon={<RiHome7Line />}
          iconActive={<RiHome7Fill />}
          link='/'
          title='Página inicial'
        />
      )}
      <NavItem
        icon={<BiHash />}
        iconActive={<BiHash style={{ strokeWidth: '1px' }} />}
        link='/explore'
        hideSmall={true}
        title='Explorar'
      />
      <NavItem
        icon={<BiSearch />}
        iconActive={<BiSearch style={{ strokeWidth: '1px' }} />}
        link='/explore'
        hideLarge={true}
        title='Pesquisar'
      />
      {!user ? null : (
        <>
          <NavItem
            icon={<AiOutlineBell />}
            iconActive={<AiFillBell />}
            link='/notifications'
            title='Notificações'
          />
          <NavItem
            icon={<HiOutlineMail />}
            iconActive={<HiMail />}
            link='/messages'
            title='Mensagens'
          />
          <NavItem
            icon={<BsPerson />}
            iconActive={<BsPersonFill />}
            link='/profile'
            title='Perfil'
          />
        </>
      )}
    </S.NavTag>
  );
};

export default Navbar;
