import React from 'react';
import style from './Headline.module.css'

type HeadlineType = {
  name: string
}

export const Headline = (props: HeadlineType) => {
  return (
      <h3 className={style.text}>{props.name}</h3>
  );
};

