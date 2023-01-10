import React from 'react';
import { AiFillBell } from 'react-icons/ai';
import { BsHeartFill, BsPersonFill, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { NotificationType } from '../../../global/types';
import * as S from './style';

interface IProps {
  type: NotificationType;
  src?: string;
}

const Icon: React.FC<IProps> = ({ type, src }) => {
  switch (type) {
    case 'notification':
      return (
        <S.IconNotification>
          <AiFillBell />
        </S.IconNotification>
      );
    case 'like':
      return (
        <S.IconLike>
          <BsHeartFill />
        </S.IconLike>
      );
    case 'device':
      return (
        <S.IconDevice>
          <BsTwitter />
        </S.IconDevice>
      );
    case 'follow':
      return (
        <S.IconNotification>
          <BsPersonFill />
        </S.IconNotification>
      );
    case 'response':
      return (
        <S.Icon>
          <Link to=''>
            <img src={src} alt='' width='48px' height='48px' />
          </Link>
        </S.Icon>
      );
    default:
      return null;
  }
};

export default Icon;
