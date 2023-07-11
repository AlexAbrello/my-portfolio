import React, {ReactElement} from 'react';
import style from './PortfolioCard.module.css'

type PortfolioCardType = {
  title: string
  logo: ReactElement
}

export const PortfolioCard = (props: PortfolioCardType) => {
  return (
      <div className={style.wrapper}>
        <div className={style.logo}>{props.logo}</div>
          <h3 className={style.title}>{props.title}</h3>
          <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, ut.</p>
      </div>
  );
};

