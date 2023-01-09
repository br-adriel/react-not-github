import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { FiFeather } from 'react-icons/fi';
import Navbar from '../Navbar';
import * as S from './style';

const Header = () => {
  return (
    <S.HeaderTag>
      <div>
        <S.Brand>
          <a href=''>
            <BsTwitter />
          </a>
        </S.Brand>
        <Navbar />
        <button>
          <BiDotsHorizontalRounded />
        </button>
        <button>
          <FiFeather />
        </button>
      </div>
      <S.ImageWrapper>
        <img
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt=''
          width='40px'
          height='40px'
        />
      </S.ImageWrapper>
    </S.HeaderTag>
  );
};

export default Header;
