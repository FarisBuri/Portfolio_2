import './App.css';
import Aside from './components/Aside';
import Header from "./components/Header"
import { useState } from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';
import ParentSection from './components/ParentSection';
import Introduce from './components/Introduce';

let counter = 0;
function App() {
  function setCounter(value: any) {
    setUpdate(value);
    counter = Number(value);
    // console.log("within", counter, value)
  }
  function getCounter() {
    return counter;
  }
  let refAside = useRef(null),
    refMenu = useRef(null),
    [update, setUpdate] = useState(0);
  return (
    <div className="App">
      <Header getElement={refAside} transfareMenu={refMenu} />
      <Aside transfare={refAside} counter={[getCounter, setCounter]} getElementMenu={refMenu} />
      <ParentSection getElement={refAside} count={getCounter} update={setUpdate} />
    </div>
  );
}

export default App;
