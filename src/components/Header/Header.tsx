import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { FiFeather } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../store/authSlice';
import Navbar from '../Navbar';
import * as S from './style';

const Header = () => {
  const { user } = useSelector(selectAuth);
  return (
    <S.HeaderTag>
      <div>
        <S.Brand>
          <Link to='/' title='Página inicial'>
            <BsTwitter />
          </Link>
        </S.Brand>
        <Navbar />
        {!user ? null : (
          <>
            <button title='Menu'>
              <BiDotsHorizontalRounded />
            </button>
            <button title='Novo tweet'>
              <FiFeather />
            </button>
          </>
        )}
      </div>
      {!user ? null : (
        <S.ImageWrapper>
          <img src={user.photoURL ?? '#'} alt='' width='40px' height='40px' />
        </S.ImageWrapper>
      )}
    </S.HeaderTag>
  );
};

export default Header;
