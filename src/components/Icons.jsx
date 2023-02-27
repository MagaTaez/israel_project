import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Icons.module.scss';

import insta from '../assets/instagram-svgrepo-com.svg';
import whatsapp from '../assets/whatsapp-svgrepo-com.svg';
import telegram from '../assets/telegram-plane-svgrepo-com.svg';

const Icons = () => {
  return (
    <div className={styles.iconsWrapper}>
      <Link className={styles.icon} to="#">
        <img src={insta} alt="icon" />
      </Link>
      <Link className={styles.icon} to="#">
        <img src={whatsapp} alt="icon" />
      </Link>
      <Link className={styles.icon} to="#">
        <img src={telegram} alt="icon" />
      </Link>
    </div>
  );
};

export default Icons;
