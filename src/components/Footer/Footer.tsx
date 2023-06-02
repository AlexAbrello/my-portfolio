import React from 'react';
import style from './Footer.module.css'

export const Footer = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.info}>
            <div className={style.title}>Aleksey Adamovich</div>
            <div className={style.networks}>
              <a href="#" className={style.networksItem}>Vkontakte</a>
              <a href="#" className={style.networksItem}>Telegram</a>
              <a href="#" className={style.networksItem}>WhatsApp</a>
              <a href="#" className={style.networksItem}>Discord</a>
            </div>
          </div>
        </div>
      </div>
  );
};

