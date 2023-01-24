import { doc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { Theme } from '../../global/types';
import { db } from '../../services/firebase';
import { selectAuth, setUserTheme } from '../../store/authSlice';
import { darkerTheme, darkTheme, lightTheme } from '../GlobalStyle';
import * as S from './style';

const colors = [
  { title: 'Azul', color: '#1D9BF0' },
  { title: 'Amarelo', color: '#FFD400' },
  { title: 'Rosa', color: '#F91880' },
  { title: 'Roxo', color: '#7856FF' },
  { title: 'Laranja', color: '#FF7A00' },
  { title: 'Verde', color: '#00BA7C' },
];

const themes = [lightTheme, darkTheme, darkerTheme];
const backgrounds = ['#ffffff', '#15202B', '#000000'];

const ThemeSelector = () => {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const submitForm = async (e: any) => {
    e.preventDefault();

    let bgColor = e.target.fundo.value;
    let newTheme: Theme = themes.filter((t) => t.bg === bgColor)[0];
    newTheme = newTheme || lightTheme;

    let newAccent = e.target.cor.value || colors[0].color;
    newTheme = { ...newTheme, accent: newAccent };

    const userRef = doc(db, 'users', user!.uid);
    await updateDoc(userRef, {
      theme: { ...newTheme },
    });

    dispatch(setUserTheme({ theme: newTheme }));
    sessionStorage.setItem(
      '@AuthFirebase:user',
      JSON.stringify({
        ...user,
        theme: newTheme,
      })
    );
  };

  return (
    <S.Wrapper>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Cor</legend>
          <S.Group name='cor' defaultValue={user?.theme.accent}>
            {colors.map((c) => (
              <S.Radio1
                value={c.color}
                style={{
                  background: c.color,
                }}
                key={c.title}
              >
                <S.Indicator1 />
              </S.Radio1>
            ))}
          </S.Group>
        </fieldset>

        <fieldset>
          <legend>Plano de fundo</legend>
          <S.Group name='fundo' defaultValue={user?.theme.bg}>
            {backgrounds.map((bg) => (
              <S.Radio2
                value={bg}
                style={{
                  background: bg,
                }}
                key={bg}
              >
                <S.Indicator2 />
              </S.Radio2>
            ))}
          </S.Group>
        </fieldset>

        <button type='submit'>Aplicar alterações</button>
      </form>
    </S.Wrapper>
  );
};

export default ThemeSelector;
