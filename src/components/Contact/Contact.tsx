import React from 'react';
import style from './Contact.module.css'

export const Contact = () => {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.info}>
            <div className={style.title}>Contacts</div>
            <form>
              <div>
                <input
                    type="text"
                    required
                />
              </div>
              <div>
                <input
                    type="email"
                    id="email"
                    required
                />
              </div>
              <div>
                <textarea
                    id="message"
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

