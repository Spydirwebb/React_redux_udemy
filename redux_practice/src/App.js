import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, auth} from './actions'
import './App.css';

function App() {
  const counter = useSelector(state=>state.counter);
  const login = useSelector(state=>state.login);
  const dispatch = useDispatch();
  const authBtnText = login ? "Logout" : "Login";

  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <button onClick={()=> dispatch(auth())}>{authBtnText} </button>
    </div>
  );
} 

export default App;
