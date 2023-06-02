import React from 'react';
import style from './Header.module.css'

export const Header = () => {
  return (
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.wrapper}>
            <nav className={style.navWrapper}>
              <div>Main</div>
              <div>My skills</div>
              <div>My works</div>
              <div>Contacts</div>
            </nav>
          </div>
        </div>
      </header>
  );
};

