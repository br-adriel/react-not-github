import { AiOutlineRetweet } from 'react-icons/ai';
import { BiBarChart, BiComment } from 'react-icons/bi';
import { BsDot, BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';
import * as S from './style';

const Tweet = () => {
  return (
    <S.Wrapper>
      <S.Interaction>
        <BsHeartFill />
        <p>Fulano curtiu</p>
      </S.Interaction>
      <S.Content>
        <S.ProfilePicture
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt=''
          width='48px'
          height='48px'
        />
        <div>
          <S.Author>
            <p>
              <a>Fulano</a>
              <span>
                @fulano <BsDot /> 6h
              </span>
            </p>
            <a href=''>
              <BsThreeDots />
            </a>
          </S.Author>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut
            unde rerum recusandae veritatis consequatur officia fugiat cum
            libero! Enim.
          </p>
          <S.Action>
            <div>
              <div>
                <BiBarChart />
              </div>
            </div>
            <div>
              <div>
                <BiComment />
              </div>
            </div>
            <div>
              <div>
                <AiOutlineRetweet />
              </div>
            </div>
            <div>
              <div>
                <BsHeart />
              </div>
              <p>1234</p>
            </div>
            <div>
              <div>
                <FiShare />
              </div>
            </div>
          </S.Action>
        </div>
      </S.Content>
    </S.Wrapper>
  );
};

export default Tweet;
