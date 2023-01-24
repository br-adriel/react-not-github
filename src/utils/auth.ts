import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { lightTheme } from '../components/GlobalStyle';
import { UserWithTheme } from '../global/types';
import { auth, db } from '../services/firebase';
import { store } from '../store';
import { login, logout } from '../store/authSlice';

const provider = new GoogleAuthProvider();

export const signInGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential?.accessToken;
    const user = res.user;

    const userSavedData = await getDoc(doc(db, 'users', user.uid));

    if (user && token) {
      const userData = {
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        theme: userSavedData.exists() ? userSavedData.data().theme : lightTheme,
      };

      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(userData));

      store.dispatch(
        login({
          user: userData as UserWithTheme,
        })
      );

      if (!userSavedData.exists()) {
        const userRef = doc(db, 'users', userData.uid);
        await setDoc(userRef, userData);
      }
    }
  } catch (error) {
    alert('Um erro ocorreu');
  }
};

export const SignInWithEmail = async (
  email: string,
  name: string,
  password: string
) => {
  const userEmail = email.trim();
  const userName = name.trim();

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    userEmail,
    password
  );
  await updateProfile(userCredential.user, {
    displayName: userName,
    photoURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  });

  const userData = {
    displayName: userCredential.user.displayName,
    photoURL: userCredential.user.photoURL,
    uid: userCredential.user.uid,
    email: userCredential.user.email,
    theme: lightTheme,
  };

  store.dispatch(
    login({
      user: userData as UserWithTheme,
    })
  );

  const userRef = doc(db, 'users', userData.uid);
  await setDoc(userRef, userData);
};

export const logInWithEmail = async (email: string, password: string) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;

    const userThemeData = await getDoc(doc(db, 'users', user.uid));

    if (user) {
      const userData = {
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        theme: userThemeData.data()!.theme,
      };

      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(userData));

      store.dispatch(
        login({
          user: userData as UserWithTheme,
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
