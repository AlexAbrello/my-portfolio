import React from 'react';
import style from "../Third Block/ThirdBlock.module.css";
import {Works} from "../Works/Works";

export const ThirdBlock = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.info}>
            <div className={style.title}>My works</div>
            <div className={style.examples}>
              <Works />
              <Works />
            </div>
          </div>
        </div>
      </div>
  );
};

