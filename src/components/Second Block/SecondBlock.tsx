import React from 'react';
import style from './SecondBlock.module.css'
import {Skills} from "../Skills/Skills";

export const SecondBlock = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.info}>
            <div className={style.title}>My skills</div>
            <div className={style.examples}>
              <Skills />
              <Skills />
              <Skills />
            </div>
          </div>
        </div>
      </div>
  );
};

