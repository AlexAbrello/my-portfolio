import React from 'react';
import style from './Header.module.css'
import {FaHome} from "react-icons/fa";
import {FaBrain} from "react-icons/fa";
import {FaBriefcase} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";

export const Header = () => {
  return (
      <header className={style.header}>
        <nav>
          <div className={style.nav}>
            <a href='#'>
              <div className={style.navIcon}><FaHome/></div>
              Main</a>
          </div>
          <div className={style.nav}>
            <a href='#'>
              <div className={style.navIcon}><FaBrain/></div>
              My skills</a>
          </div>
          <div className={style.nav}>
            <a href='#'>
              <div className={style.navIcon}><FaBriefcase/></div>
              My works</a>
          </div>
          <div className={style.nav}>
            <a href='#'>
              <div className={style.navIcon}><FaPhone/></div>
              Contacts</a>
          </div>
        </nav>
      </header>
  );
};

