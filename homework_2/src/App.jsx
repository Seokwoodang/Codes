import './App.css';
import Home from './Home';
import ContentInput from './component/ContentInput';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail' element={<ContentInput/>}/>
    </Routes>
  );
}

export default App;
