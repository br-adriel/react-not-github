import * as Dialog from '@radix-ui/react-dialog';
import { BiX } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import * as S from './Modal.style';
import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children?: any;
  triggerContent: any;
  showHeader?: boolean;
}

const Modal = ({
  children,
  triggerContent,
  showHeader = true,
  ...rest
}: Props) => {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger>{triggerContent}</Dialog.Trigger>
      <Dialog.Portal>
        <S.Overlay>
          <S.Content>
            {showHeader ?? (
              <S.Header>
                <Dialog.Close>
                  <BiX />
                </Dialog.Close>
                <Dialog.Title>
                  <BsTwitter />
                </Dialog.Title>
              </S.Header>
            )}

            {children}
          </S.Content>
        </S.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
