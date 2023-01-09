import { AiFillBell, AiOutlineBell } from 'react-icons/ai';
import { BiHash, BiSearch } from 'react-icons/bi';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { HiMail, HiOutlineMail } from 'react-icons/hi';
import { RiHome7Fill, RiHome7Line } from 'react-icons/ri';
import NavItem from './NavItem';
import * as S from './style';

const Navbar = () => {
  return (
    <S.NavTag>
      <NavItem icon={<RiHome7Line />} iconActive={<RiHome7Fill />} link='' />
      <NavItem
        icon={<BiHash />}
        iconActive={<BiHash style={{ strokeWidth: '1px' }} />}
        link=''
        hideSmall={true}
      />
      <NavItem
        icon={<BiSearch />}
        iconActive={<BiSearch style={{ strokeWidth: '1px' }} />}
        link=''
        hideLarge={true}
      />
      <NavItem icon={<AiOutlineBell />} iconActive={<AiFillBell />} link='' />
      <NavItem icon={<HiOutlineMail />} iconActive={<HiMail />} link='' />
      <NavItem icon={<BsPerson />} iconActive={<BsPersonFill />} link='' />
    </S.NavTag>
  );
};

export default Navbar;
