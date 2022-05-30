import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import Box from './Box';

function App() {
    const count=useSelector(state=>state.count)
    const dispatch = useDispatch();
    const id =useSelector((state)=>state.id);
    const password = useSelector((state)=>state.password);
    
    
    const decrease=()=>{
      dispatch({type:"DECREMENT",payload:{num:5}});
    };

    const increase=()=>{
      dispatch({type:"INCREMENT",payload:{num:5}});
    };

    const login=()=>{
      dispatch({type:"LOGIN",payload:{id:"noona",password:"132"}})
    };

  return (
    <div>
      <h1>{id}{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>login!</button>
      <button onClick={decrease}>감소!</button>
      <Box/>
    </div>
  );
}

export default App;
