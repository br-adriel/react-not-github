import { useContext } from 'react';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';
import { BiHash, BiSearch } from 'react-icons/bi';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { HiMail, HiOutlineMail } from 'react-icons/hi';
import { RiHome7Fill, RiHome7Line } from 'react-icons/ri';
import AuthGoogleContext from '../../contexts/AuthGoogleContext';
import NavItem from './NavItem';
import * as S from './style';

const Navbar = () => {
  const { user } = useContext(AuthGoogleContext);
  return (
    <S.NavTag>
      {!user ? null : (
        <NavItem icon={<RiHome7Line />} iconActive={<RiHome7Fill />} link='/' />
      )}
      <NavItem
        icon={<BiHash />}
        iconActive={<BiHash style={{ strokeWidth: '1px' }} />}
        link='/explore'
        hideSmall={true}
      />
      <NavItem
        icon={<BiSearch />}
        iconActive={<BiSearch style={{ strokeWidth: '1px' }} />}
        link='/explore'
        hideLarge={true}
      />
      {!user ? null : (
        <>
          <NavItem
            icon={<AiOutlineBell />}
            iconActive={<AiFillBell />}
            link='/notifications'
          />
          <NavItem
            icon={<HiOutlineMail />}
            iconActive={<HiMail />}
            link='/messages'
          />
          <NavItem
            icon={<BsPerson />}
            iconActive={<BsPersonFill />}
            link='/username'
          />
        </>
      )}
    </S.NavTag>
  );
};

export default Navbar;
