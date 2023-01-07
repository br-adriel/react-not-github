import { BiSearch } from 'react-icons/bi';
import { IoMdCloseCircle } from 'react-icons/io';
import * as S from './style';

const SearchForm = () => {
  return (
    <S.Wrapper>
      <form>
        <S.InputWrapper>
          <BiSearch />
          <div>
            <input type='text' placeholder='Buscar no Twitter' />
            <S.ResetButtonWrapper>
              <button type='reset'>
                <IoMdCloseCircle />
              </button>
            </S.ResetButtonWrapper>
          </div>
        </S.InputWrapper>
      </form>
    </S.Wrapper>
  );
};

export default SearchForm;
