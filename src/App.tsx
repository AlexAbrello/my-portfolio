import React from 'react';
import style from './App.module.css'
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {UniversalBlock} from "./components/Second Block/UniversalBlock";

function App() {
  return (
      <div>
        <Header/>
        <div>
          <Main />
          <UniversalBlock />
        </div>
      </div>
  );
}

export default App;
