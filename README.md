# Clone visual do Twitter :hatching_chick:

Esse site foi constuído durante uma lição do [The Odin Project](https://www.theodinproject.com/).

Você pode ver como ficou o resultado clicando [aqui](https://br-adriel.github.io/react-not-twitter/).

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Executando o projeto localmente

Para executar o projeto localmente você precisa ter o [Node e o npm](https://nodejs.org/en/) instalados em sua máquina.

Você também precisa de um projeto no [firebase](https://firebase.google.com/) com a firestore e a autenticação usando os
métodos de email/senha e conta Google habilitados. 

1. Faça download do código fonte do projeto

2. Copie o arquivo `.env.example` e o renomeie para `.env`

3. Preencha o arquivo .env com as configurações do seu projeto no firebase

4. Abra o projeto no terminal e execute o comando `npm install` para instalar as depedências do projeto

5. Execute o comando `npm run dev` para iniciar o servidor


## Funcionalidades implementadas

- Autenticação (cadastro e login) utilizando email e senha ou conta do Google.
- Criação de "tweet" (não foi implementado a adição de anexos)
- Feed de tweets (a listagem engloba todos os "tweets" feitos na plataforma)
- Perfil do usuário (lista os "tweets" feitos pelo usuário logado)
- Customização das cores de fundo e de destaque do site
