import React from 'react';
import style from './Footer.module.css'

export const Footer = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.info}>
            <div className={style.title}>Aleksey Adamovich</div>
            <div className={style.networks}>
              <a href="#">Vkontakte</a>
              <a href="#">Telegram</a>
              <a href="#">WhatsApp</a>
              <a href="#">Discord</a>
            </div>
          </div>
        </div>
      </div>
  );
};

