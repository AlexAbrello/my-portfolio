import React from 'react';
import style from './Skills.module.css'
import logo from '../../logo192.png'

export const Skills = () => {
  return (
      <div className={style.container}>
        <img src={logo} alt="React" className={style.logo}/>
        <div className={style.title}>React</div>
        <div className={style.description}>Some description</div>
      </div>
  );
};

