import React from 'react';
import style from './MySkills.module.css'
import {Headline} from "../Headline/Headline";

export const MySkills = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <Headline name={'My Stack'}/>
        </div>
      </div>
  );
};

