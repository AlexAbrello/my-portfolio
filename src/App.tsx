import React from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {MySkills} from "./components/My Skills/MySkills";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
      <div>
        <Header/>
          <Main />
          <MySkills />
          <Portfolio />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
