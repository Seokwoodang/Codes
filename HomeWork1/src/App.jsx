import "./style.css";
import { Routes,Route } from 'react-router-dom';
import Detail from './detail';
import Home from './Home';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:day" element={<Detail/>}/>
      </Routes>
  );
}

export default App;
