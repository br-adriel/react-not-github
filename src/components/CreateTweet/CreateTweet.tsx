import { AiOutlineFileGif } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { RiEarthFill } from 'react-icons/ri';
import { TbCalendarTime, TbPhoto } from 'react-icons/tb';
import { TfiList } from 'react-icons/tfi';
import * as S from './style';

const CreateTweet = () => {
  return (
    <S.Wrapper>
      <img
        src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        alt=''
        width='48px'
        height='48px'
      />
      <S.FormDiv>
        <S.PublicSelector>
          <p>Qualquer pessoa</p>
          <IoIosArrowDown />
        </S.PublicSelector>
        <textarea
          name=''
          id=''
          placeholder='O que está acontecendo?'
        ></textarea>
        <S.AnswerSelector>
          <RiEarthFill />
          Qualquer pessoa pode responder
        </S.AnswerSelector>
        <S.ActionBar>
          <S.AddAttachment>
            <div>
              <button>
                <TbPhoto />
              </button>
            </div>
            <div>
              <button>
                <AiOutlineFileGif />
              </button>
            </div>
            <div>
              <button>
                <TfiList />
              </button>
            </div>
            <div>
              <button>
                <BsEmojiSmile />
              </button>
            </div>
            <div>
              <button>
                <TbCalendarTime />
              </button>
            </div>
            <div>
              <button>
                <BiMap />
              </button>
            </div>
          </S.AddAttachment>
          <S.TweetButton>Tweetar</S.TweetButton>
        </S.ActionBar>
      </S.FormDiv>
    </S.Wrapper>
  );
};

export default CreateTweet;
