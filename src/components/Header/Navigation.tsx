import React from 'react';
import style from "./Navigation.module.css";
import {FaBrain, FaBriefcase, FaHome, FaPhone} from "react-icons/fa";

export const Navigation = () => {
  return (
      <nav className={style.header}>
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
            portfolio</a>
        </div>
        <div className={style.nav}>
          <a href='#'>
            <div className={style.navIcon}><FaPhone/></div>
            Contacts</a>
        </div>
      </nav>
  );
};

