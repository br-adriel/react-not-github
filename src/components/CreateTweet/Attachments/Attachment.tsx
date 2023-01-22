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
  );
};

export default Attachments;
