import './App.css';
import Aside from './components/Aside';
import Header from "./components/Header"
// import { useState } from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';
import ParentSection from './components/ParentSection';
import Introduce from './components/Introduce';



function App() {
  let  refAside = useRef(null);
  return (
    <div className="App">
      <Header getElement={refAside} />
      <Aside  transfare={refAside}/>
      <ParentSection getElement={refAside}/>
    </div>
  );
}

export default App;
