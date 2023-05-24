import React from 'react';
import style from './Main.module.css'
import ava from './samurai.jpg'

export const Main = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.info}>
            <div className={style.text}>
              <div>Hi, my name is Aleksey Adamovich!</div>
              <div>And I'm a web-developer!</div>
            </div>
            <div>
              <img src={ava} alt="Samurai" className={style.photo}/>
            </div>
          </div>
        </div>
      </div>
  );
};

