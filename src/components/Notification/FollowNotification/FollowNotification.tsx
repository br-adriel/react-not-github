import React from 'react';
import * as S from './style';

const FollowNotification = () => {
  return (
    <>
      <S.Follower>
        <a href=''>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
            alt=''
            width='32px'
            height='32px'
          />
        </a>
      </S.Follower>
      <S.FollowerName>
        <a href=''>Fulaninho silva</a> seguiu você
      </S.FollowerName>
    </>
  );
};

export default FollowNotification;
