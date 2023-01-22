import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
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

    if (user && token) {
      const userData = {
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        email: user.email,
      };

      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(userData));

      store.dispatch(
        login({
          user: userData as User,
        })
      );

      const userRef = doc(db, 'users', userData.uid);
      await setDoc(userRef, userData);
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
  };

  store.dispatch(
    login({
      user: userData as User,
    })
  );

  const userRef = doc(db, 'users', userData.uid);
  await setDoc(userRef, userData);
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
