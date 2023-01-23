import { AiOutlineFileGif } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { TbCalendarTime, TbPhoto } from 'react-icons/tb';
import { TfiList } from 'react-icons/tfi';
import * as S from './style';

const Attachments = () => {
  return (
    <S.AddAttachment>
      <div>
        <button type='button' title='Adicionar imagem'>
          <TbPhoto />
        </button>
      </div>
      <div>
        <button type='button' title='Adicionar GIF'>
          <AiOutlineFileGif />
        </button>
      </div>
      <div>
        <button type='button' title='Adicionar enquete'>
          <TfiList />
        </button>
      </div>
      <div>
        <button type='button' title='Adicionar emoji'>
          <BsEmojiSmile />
        </button>
      </div>
      <div>
        <button type='button' title='Programar envio'>
          <TbCalendarTime />
        </button>
      </div>
      <div>
        <button type='button' title='Adicionar localização'>
          <BiMap />
        </button>
      </div>
    </S.AddAttachment>
  );
};

export default Attachments;
