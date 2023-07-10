import React from 'react';
import style from './Header.module.css'

export const Header = () => {
  return (
      <header className={style.header}>
        <nav>
          <div className={style.navIcon}>
            <a href='#'>Main</a>
          </div>
          <div className={style.navIcon}>
            <a href='#'>My skills</a>
          </div>
          <div className={style.navIcon}>
            <a href='#'>My works</a>
          </div>
          <div className={style.navIcon}>
            <a href='#'>Contacts</a>
          </div>
        </nav>
      </header>
  );
};

