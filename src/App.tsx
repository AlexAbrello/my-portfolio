import React from 'react';
import style from './App.module.css'
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {SecondBlock} from "./components/Second Block/SecondBlock";
import {ThirdBlock} from "./components/Third Block/ThirdBlock";
import {FourthBlock} from "./components/Fourth Block/FourthBlock";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
      <div>
        <Header/>
          <Main />
          <SecondBlock />
          <ThirdBlock />
          <FourthBlock />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
