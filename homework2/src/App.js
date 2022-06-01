import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import Add from './pages/add';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Add/>}/>
      </Routes>
  );
}

export default App;
