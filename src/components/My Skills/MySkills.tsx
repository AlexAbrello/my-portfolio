import React from 'react';
import style from './MySkills.module.css'
import {Headline} from "../Headline/Headline";
import {FaCss3Alt, FaHtml5, FaReact} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {TbBrandRedux} from "react-icons/tb";


export const MySkills = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <Headline name={'My Stack'}/>
          <div className={style.description}>
            <div className={style.stackInfo}>
              <div>
                <FaHtml5 style={{color: '#d9832e', fontSize: '70px'}}/>
                <p className={style.stackText}>HTML</p>
              </div>
              <div>
                <FaCss3Alt style={{color: '#2e56d9', fontSize: '70px'}}/>
                <p className={style.stackText}>CSS</p>
              </div>
              <div>
                <IoLogoJavascript style={{color: '#ffdd00', fontSize: '70px'}}/>
                <p className={style.stackText}>JavaScript</p>
              </div>
              <div>
                <FaReact style={{color: '#00baff', fontSize: '70px'}}/>
                <p className={style.stackText}>React</p>
              </div>
              <div>
                <TbBrandRedux style={{color: '#8300ff', fontSize: '70px'}}/>
                <p className={style.stackText}>Redux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

