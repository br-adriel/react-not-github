import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { auth } from '../services/firebase';
import { store } from '../store';
import { login, logout } from '../store/authSlice';

const provider = new GoogleAuthProvider();

export const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      const user = res.user;

      if (user && token) {
        const userData = {
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
        };

        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(userData));

        store.dispatch(
          login({
            user: userData as User,
          })
        );
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const logInWithEmail = async (email: string, password: string) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;

    if (user) {
      const userData = {
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
      };

      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(userData));

      store.dispatch(
        login({
          user: userData as User,
        })
      );
    }
  } catch (error) {
    alert('Credenciais inválidas');
  }
};

export const logOut = async () => {
  await signOut(auth);
  sessionStorage.removeItem('@AuthFirebase:token');
  sessionStorage.removeItem('@AuthFirebase:user');

  store.dispatch(logout());
};
