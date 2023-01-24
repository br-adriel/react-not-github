import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { FiFeather } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../store/authSlice';
import { logOut } from '../../utils/auth';
import Modal from '../AuthModal';
import CreateTweet from '../CreateTweet';
import TweetForm from '../CreateTweet/TweetForm';
import Navbar from '../Navbar';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
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
            <Modal title='Menu' triggerContent={<BiDotsHorizontalRounded />}>
              <ThemeSelector />
            </Modal>
            <Modal title='Novo tweet' triggerContent={<FiFeather />}>
              <CreateTweet />
            </Modal>
          </>
        )}
      </div>
      {!user ? null : (
        <S.ImageWrapper onClick={logOut} title='Sair'>
          <img src={user.photoURL ?? '#'} alt='' width='40px' height='40px' />
        </S.ImageWrapper>
      )}
    </S.HeaderTag>
  );
};

export default Header;
