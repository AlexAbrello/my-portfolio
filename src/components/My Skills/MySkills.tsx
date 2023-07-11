import React from 'react';
import style from './MySkills.module.css'
import {Headline} from "../Headline/Headline";
import {FaCss3Alt, FaGithub, FaHtml5, FaReact} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {TbBrandRedux} from "react-icons/tb";
import {SiTypescript} from "react-icons/si";


export const MySkills = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div>
            <Headline name={'My Stack'}/>
          </div>
          <div className={style.description}>
            <div className={style.stackInfo}>
              <div>
                <div className={style.stackLogo}>
                  <FaHtml5 style={{color: '#d9832e'}}/>
                </div>
                <p className={style.stackText}>HTML</p>
              </div>
              <div>
                <div className={style.stackLogo}>
                  <FaCss3Alt style={{color: '#2e56d9'}}/>
                </div>
                <p className={style.stackText}>CSS</p>
              </div>
              <div>
                <div className={style.stackLogo}>
                  <IoLogoJavascript style={{color: '#ffdd00'}}/>
                </div>
                <p className={style.stackText}>JavaScript</p>
              </div>
              <div>
                <div className={style.stackLogo}>
                  <SiTypescript style={{color: '#208fcb'}}/>
                </div>
                <p className={style.stackText}>TypeScript</p>
              </div>
              <div>
                <div className={style.stackLogo}>
                  <FaReact style={{color: '#00baff'}}/>
                </div>
                <p className={style.stackText}>React</p>
              </div>
              <div>
                <div className={style.stackLogo}>
                  <TbBrandRedux style={{color: '#8300ff'}}/>
                </div>
                <p className={style.stackText}>Redux</p>
              </div>
              <div>
                <div className={style.stackLogo}>
                  <FaGithub style={{color: '#2f2c31'}}/>
                </div>
                <p className={style.stackText}>GitHub</p>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'end', marginTop: '20px'}}>
            <Headline name={'Experience'}/>
          </div>
          <div className={style.description}>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, optio!</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, architecto at consequuntur culpa, error
                expedita harum ipsam laboriosam natus numquam quam saepe sunt unde voluptates.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor itaque nobis odio ratione voluptas?</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

