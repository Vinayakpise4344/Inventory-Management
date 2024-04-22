import './App.css';
import Singup from './Pages/Singup';
import Login from './Pages/Login';

import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Dashboard from './Component/Dashboard';
import Invet from './Pages/Invet';
import About from './Component/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Singup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/inventory' element={<Dashboard/>}></Route>
      <Route path='/invet' element={<Invet/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
