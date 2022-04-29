import './App.css';
import Aside from './components/Aside';
import Header from "./components/Header"
import {contextAside} from './components/Context';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';



function App() {
  let  refAside = useRef(null);
  return (
    <div className="App">
      <Header getElement={refAside} />
      <Aside  transfare={refAside}/>
    </div>
  );
}

export default App;
