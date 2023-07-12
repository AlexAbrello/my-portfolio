import React from 'react';
import style from "./Portfolio.module.css";
import {Headline} from "../Headline/Headline";
import {PortfolioCard} from "../PortfolioCard/PortfolioCard";
import {RiEnglishInput, RiTodoLine} from "react-icons/ri";
import {GiAutoRepair} from "react-icons/gi";

export const Portfolio = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div style={{marginLeft: '70px'}}>
            <Headline name={'My works'} />
          </div>
          <div className={style.cardContainer}>
            <PortfolioCard title={'TodoList App'} logo={<RiTodoLine />}/>
            <PortfolioCard title={'Auto E-Shop'} logo={<GiAutoRepair />}/>
            <PortfolioCard title={'English App'} logo={<RiEnglishInput />}/>
          </div>
        </div>
      </div>
  );
};

