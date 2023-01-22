import { ComponentPropsWithoutRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiEarthFill } from 'react-icons/ri';
import Attachments from '../Attachments';
import * as S from './TweetForm.style';

interface Props extends ComponentPropsWithoutRef<'form'> {}

const TweetForm = ({ ...rest }: Props) => {
  const [tweetContent, setTweetContent] = useState('');
  const [invalid, setInvalid] = useState(false);

  const changeContent = (e: any) => {
    const text = e.target.value;
    setInvalid(text.length > 140);
    setTweetContent(e.target.value);
  };

  return (
    <S.Form onSubmit={rest.onSubmit}>
      <S.PublicSelector>
        <p>Qualquer pessoa</p>
        <IoIosArrowDown />
      </S.PublicSelector>
      <textarea
        name=''
        id=''
        placeholder='O que está acontecendo?'
        rows={4}
        value={tweetContent}
        onChange={changeContent}
        className={invalid ? 'invalid' : ''}
      ></textarea>
      <S.TweetDetails>
        <S.AnswerSelector>
          <RiEarthFill />
          Qualquer pessoa pode responder
        </S.AnswerSelector>
        <S.CharacterCounter className={invalid ? 'invalid' : ''}>
          {tweetContent && tweetContent.length}
        </S.CharacterCounter>
      </S.TweetDetails>
      <S.ActionBar>
        <Attachments />
        <S.TweetButton type='submit'>Tweetar</S.TweetButton>
      </S.ActionBar>
    </S.Form>
  );
};

export default TweetForm;
