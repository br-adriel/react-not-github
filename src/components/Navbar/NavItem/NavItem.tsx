import React from 'react';
import * as S from './style';

interface IProps {
  link: string;
  icon: any;
  iconActive: any;
  hideSmall?: boolean;
  hideLarge?: boolean;
}

const NavItem: React.FC<IProps> = (props) => {
  const {
    link,
    icon,
    iconActive,
    hideSmall = false,
    hideLarge = false,
  } = props;
  return (
    <S.Wrapper hideSmall={hideSmall} hideLarge={hideLarge}>
      <a href={link}>{icon}</a>
    </S.Wrapper>
  );
};

export default NavItem;
