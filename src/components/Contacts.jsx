import React from 'react';
import styles from './Contacts.module.scss';
const Contacts = () => {
  return (
    <div className={styles.form__wrapper}>
      <div className={styles.form__element}>
        <h4 className={styles.form__contact}>Contact</h4>
        <div className={styles.form__discuss}>Discuss the project</div>
        <div className={styles.form__email}>Jerusalem@mail.ru</div>
        <div className={styles.form__phone}>+7 (932) 213-45-63</div>
        <div className={styles.form__coop}>Cooperation</div>
        <div className={styles.form__email}>Jerusalem@mail.ru</div>
      </div>
      <div className={styles.form__bottom}></div>
    </div>
  );
};

export default Contacts;
