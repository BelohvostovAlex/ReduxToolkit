import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useAppDispatch, useAppSelector} from './hooks/useAppDispatch'
import { userSlice } from './store/reducers/userSlice';

function App() {
  const {count} = useAppSelector(state => state.userReducer)
  const {increment} = userSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(2))}>Increment</button>
    </div>
  );
}

export default App;
