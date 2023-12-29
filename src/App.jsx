import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Inicio } from './components/Inicio';
import { Jugar } from './components/Jugar';
import { Users } from './components/Users';
export default function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Inicio/>}></Route>
    <Route path='/Jugar' element={<Jugar/>}></Route>
    <Route path='/ranking' element={<Users/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

/*
  <div className="App">
      <h1>Juego de Memoria!</h1>
      <button>Nuevo Juego</button>
    </div>
    */