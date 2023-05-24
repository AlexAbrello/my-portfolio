import React from 'react';
import style from './SecondBlock.module.css'
import {Skills} from "../Examples/Skills";

export const UniversalBlock = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.info}>
            <div className={style.title}>My works</div>
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

