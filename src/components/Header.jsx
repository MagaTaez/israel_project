import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.scss';

import logo from '../assets/logo.png';

const Header = ({ setOpened, opened }) => {
  const handleClick = () => {
    setOpened(true);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.first__section}>
        <div onClick={handleClick} className={styles.bar__wrapper}>
          <div className={`${opened ? styles.change1 : ''} ${styles.bar1}`}></div>
          <div className={`${opened ? styles.change2 : ''} ${styles.bar2}`}></div>
          <div className={`${opened ? styles.change3 : ''} ${styles.bar3}`}></div>
        </div>
        <div className={styles.sections}>
          <NavLink to="/" className={styles.design}>
            <img src={logo} alt="logo" />
            DESIGN ISRAEL
          </NavLink>
          <NavLink to="/services" className={styles.services}>
            Services
          </NavLink>
          <NavLink to="*" className={styles.services}>
            Cases
          </NavLink>
        </div>
      </div>
      <div className={styles.second__section}>
        <a href="#" className={styles.button}>
          Become a client
        </a>
      </div>
    </div>
  );
};

export default Header;
