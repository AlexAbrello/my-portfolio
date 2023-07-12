import React from 'react';
import style from './Contact.module.css'
import {Headline} from "../Headline/Headline";

export const Contact = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div style={{marginLeft: '70px'}}>
            <Headline name={'Contact me'}/>
          </div>
          <div className={style.formContainer}>
            <form>
              <div>
                <input
                    type="text"
                    placeholder='Subject'
                    required
                />
              </div>
              <div>
                <input
                    type="email"
                    id="email"
                    placeholder='Your E-mail'
                    required
                />
              </div>
              <div>
                <textarea
                    id="message"
                    placeholder='Message'
                    required
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
  );
};

