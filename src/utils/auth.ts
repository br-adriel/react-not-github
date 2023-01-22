import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../services/firebase';
import { store } from '../store';
import { login } from '../store/authSlice';

const provider = new GoogleAuthProvider();

export const signInGoogle = () => {
  signInWithPopup(auth, provider).then((res) => {
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential?.accessToken;
    const user = res.user;

    if (user && token) {
      store.dispatch(
        login({
          user: {
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          } as User,
          token,
        })
      );

      sessionStorage.setItem('@token', token);
      sessionStorage.setItem('@user', JSON.stringify(user));
    }
  });
};
