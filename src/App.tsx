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
    counter = value;
    console.log("within", counter, value)
  }
  function getCounter() {
    return counter;
  }
  let refAside = useRef(null);
  let [update, setUpdate] = useState(0);
  return (
    <div className="App">
      <Header getElement={refAside} />
      <Aside transfare={refAside} counter={[getCounter, setCounter]} />
      <ParentSection getElement={refAside} count={getCounter} update={setUpdate} />
    </div>
  );
}

export default App;
