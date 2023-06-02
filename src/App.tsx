import React from 'react';
import style from './App.module.css'
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {SecondBlock} from "./components/Second Block/SecondBlock";
import {ThirdBlock} from "./components/Third Block/ThirdBlock";
import {FourthBlock} from "./components/Fourth Block/FourthBlock";
import {Contact} from "./components/Contact/Contact";

function App() {
  return (
      <div>
        <Header/>
        <div>
          <Main />
          <SecondBlock />
          <ThirdBlock />
          <FourthBlock />
          <Contact />
        </div>
      </div>
  );
}

export default App;
