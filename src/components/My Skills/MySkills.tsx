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
          <div style={{marginLeft: '50px'}}>
            <Headline name={'My Stack'}/>
          </div>
          <div className={style.description}>
            <div className={style.stackInfo}>
              <div>
                <FaHtml5 style={{color: '#d9832e', fontSize: '70px', margin: '0 65px 0'}}/>
                <p className={style.stackText}>HTML</p>
              </div>
              <div>
                <FaCss3Alt style={{color: '#2e56d9', fontSize: '70px', margin: '0 65px 0'}}/>
                <p className={style.stackText}>CSS</p>
              </div>
              <div>
                <IoLogoJavascript style={{color: '#ffdd00', fontSize: '70px', margin: '0 65px 0'}}/>
                <p className={style.stackText}>JavaScript</p>
              </div>
              <div>
                <SiTypescript style={{color: '#208fcb', fontSize: '70px', margin: '0 65px 0'}}/>
                <p className={style.stackText}>TypeScript</p>
              </div>
              <div>
                <FaReact style={{color: '#00baff', fontSize: '70px', margin: '0 65px 0'}}/>
                <p className={style.stackText}>React</p>
              </div>
              <div>
                <TbBrandRedux style={{color: '#8300ff', fontSize: '70px', margin: '0 65px 0'}}/>
                <p className={style.stackText}>Redux</p>
              </div>
              <div>
                <FaGithub style={{color: '#2f2c31', fontSize: '70px', margin: '0 65px 0'}}/>
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

