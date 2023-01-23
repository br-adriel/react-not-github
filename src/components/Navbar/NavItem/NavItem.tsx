import { PropsWithoutRef } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './style';

interface IProps {
  link: string;
  icon: any;
  iconActive: any;
  hideSmall?: boolean;
  hideLarge?: boolean;
  title?: string;
}

const NavItem: React.FC<IProps> = (props) => {
  const {
    link,
    icon,
    iconActive,
    hideSmall = false,
    hideLarge = false,
    title,
  } = props;
  return (
    <S.Wrapper hideSmall={hideSmall} hideLarge={hideLarge}>
      <NavLink to={link} title={title}>
        {({ isActive }) => (isActive ? iconActive : icon)}
      </NavLink>
    </S.Wrapper>
  );
};

export default NavItem;
