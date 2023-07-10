import React from 'react';
import style from './Main.module.css'
import ava from '../../assets/frontend.png'

export const Main = () => {
  return (
      <div className={style.page}>
            <div>
              <img src={ava} alt="Man" className={style.photo}/>
            </div>
      </div>
  );
};

