import React from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from '../config/firebase';

export const AuthComponent = () => {
  const [user, loading] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('name');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {!user && (
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign In with Google!
        </button>
      )}
      {user && (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button className='log-out' onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </>
  );
};
