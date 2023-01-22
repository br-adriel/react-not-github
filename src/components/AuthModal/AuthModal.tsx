import * as Dialog from '@radix-ui/react-dialog';
import { BiX } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import * as S from './AuthModal.style';

type Props = {
  children?: any;
  triggerContent: any;
};

const AuthModal = ({ children, triggerContent }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{triggerContent}</Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay>
          <S.Content>
            <S.Header>
              <Dialog.Close>
                <BiX />
              </Dialog.Close>
              <Dialog.Title>
                <BsTwitter />
              </Dialog.Title>
            </S.Header>

            {children}
          </S.Content>
        </S.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AuthModal;
