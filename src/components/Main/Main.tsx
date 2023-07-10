import React from 'react';
import style from './Main.module.css'
import ava from '../../assets/frontend.png'
import {Button} from "../Button/Button";

export const Main = () => {
  return (
      <div className={style.page}>
        <div>
          <div className={style.textWrapper}>
            <h6 className={style.textHi}>Hello there...</h6>
            <h1 className={style.textName}>Aleksey Adamovich</h1>
            <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, corporis dolore
              eligendi est explicabo fuga
              itaque laboriosam molestiae tempore unde. Alias architecto consequatur culpa, cumque doloribus eos facilis
              fugit iusto laudantium minus nostrum perferendis possimus repellendus sed similique tempore temporibus. Ea
              earum enim expedita ipsum labore nulla placeat quaerat ratione!</p>
          </div>
          <div className={style.buttonWrapper}>
            <div className={style.buttonMyWork}>
              <Button name={'My Works'}/>
            </div>
            <div className={style.buttonHireMe}>
              <Button name={'Hire Me'}/>
            </div>
          </div>
        </div>
        <img src={ava} alt="Man" className={style.photo}/>
      </div>
  );
};

