import React from 'react';
import style from './Footer.module.css'
import {SlSocialVkontakte} from "react-icons/sl";
import {LiaTelegram} from "react-icons/lia";
import {AiOutlineLinkedin} from "react-icons/ai";
import {MdOutlineDocumentScanner} from "react-icons/md";
import {FiGithub} from "react-icons/fi";

export const Footer = () => {
  return (
      <div className={style.page}>
        <div className={style.text}>Aleksey Adamovich</div>
        <div className={style.icons}>
          <div className={style.iconsItem}>
            <SlSocialVkontakte />
          </div>
          <div className={style.iconsItem}>
            <LiaTelegram />
          </div>
          <div className={style.iconsItem}>
            <AiOutlineLinkedin />
          </div>
          <div className={style.iconsItem}>
            <MdOutlineDocumentScanner />
          </div>
          <div className={style.iconsItem}>
            <FiGithub />
          </div>
        </div>
      </div>
  );
};

