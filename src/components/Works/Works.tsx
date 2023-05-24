import React from 'react';
import style from "../Works/Works.module.css";
import logo from "../../logo192.png";

export const Works = () => {
  return (
      <div className={style.container}>
        <div className={style.header}>
          <img src={logo} alt="React" className={style.logo}/>
          <a href="https://github.com/AlexAbrello?tab=repositories" className={style.showButton}>Show</a>
        </div>
        <div className={style.footer}>
          <div className={style.title}>React</div>
          <div className={style.description}>Some description</div>
        </div>
      </div>
  );
};

