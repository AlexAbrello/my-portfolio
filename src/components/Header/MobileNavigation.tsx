import React, {useState} from 'react';
import style from './MobileNavigation.module.css'
import {FaBrain, FaBriefcase, FaHome, FaPhone} from "react-icons/fa";
import {IoReorderThreeOutline, IoCloseOutline} from 'react-icons/io5'


export const MobileNavigation = () => {

  const [condition, setCondition] = useState(false)

  return (
      <div className={style.wrapper}>
        {condition &&
            <nav className={style.navigationList}>
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
            </nav>}
        <div className={style.burgerMenu} onClick={() => setCondition(!condition)}>
          {condition ? <IoCloseOutline/> : <IoReorderThreeOutline/>}
        </div>
      </div>
  );
};

