import React from 'react';
import style from './Header.module.css'

export const Header = () => {
  return (
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.wrapper}>
            <nav className={style.navWrapper}>
              <a href='#'>Main</a>
              <a href='#'>My skills</a>
              <a href='#'>My works</a>
              <a href='#'>Contacts</a>
            </nav>
          </div>
        </div>
      </header>
  );
};

