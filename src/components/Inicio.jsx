import React from 'react';
import { AuthComponent } from './auth';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

export const Inicio = () => {

  return (
    <div className="App">
      <h1>Juego de Memoria!</h1>
      <Link to='/Jugar' className='button'>Nuevo Juego</Link>
      <Link to='/ranking' className='button'>Ver Ranking</Link>
      <AuthComponent />
    </div>
  );
};
