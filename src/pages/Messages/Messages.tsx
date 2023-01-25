import { Helmet } from 'react-helmet-async';
import { BiMessageAdd } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { Container600px } from '../../components/Container';
import Header from '../../components/Header';
import * as PageTitle from '../../components/PageTitle';
import * as S from './style';

const Messages = () => {
  return (
    <S.Wrapper>
      <Helmet>
        <title>Mensagens / Not twitter</title>
      </Helmet>

      <Header />
      <S.Content>
        <Container600px>
          <PageTitle.Title>
            <h3>Mensagens</h3>
            <S.Icons>
              <PageTitle.Icon>
                <a href='#'>
                  <FiSettings />
                </a>
              </PageTitle.Icon>
              <PageTitle.Icon>
                <a href='#'>
                  <BiMessageAdd />
                </a>
              </PageTitle.Icon>
            </S.Icons>
          </PageTitle.Title>

          <div>
            <h3>Receba as boas-vindas à sua caixa de entrada!</h3>
            <p>
              Escreva, compartilhe Tweets e muito mais com conversas privadas
              entre você e outras pessoas no Twitter.
            </p>
            <S.Button>Escrever uma mensagem</S.Button>
          </div>
        </Container600px>
      </S.Content>

      <S.Messages>
        <div>
          <h3>Selecione uma mensagem</h3>
          <p>
            Escolha entre as conversas existentes, inicie uma nova ou continue
            explorando.
          </p>
          <S.Button>Nova mensagem</S.Button>
        </div>
      </S.Messages>
    </S.Wrapper>
  );
};

export default Messages;
