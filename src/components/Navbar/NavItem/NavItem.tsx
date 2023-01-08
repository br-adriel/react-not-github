import React from 'react';
import * as S from './style';

interface IProps {
  link: string;
  icon: any;
  iconActive: any;
}

const NavItem: React.FC<IProps> = ({ link, icon, iconActive }) => {
  return (
    <S.Wrapper>
      <a href={link}>{icon}</a>
    </S.Wrapper>
  );
};

export default NavItem;
