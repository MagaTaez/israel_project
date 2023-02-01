import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import LanguageFlags from './LanguageFlags';

import styles from './Header.module.scss';
import logo from '../assets/logo.png';
import { useEffect } from 'react';

const Header = ({ setOpened, opened }) => {
  const ref = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const { t } = useTranslation();

  // тут мы делаем анимацию для активного элемента в навигации
  const navActive = (reference) => {
    ref.current.style.left = reference.current ? reference.current.offsetLeft + 'px' : 0;
    ref.current.style.width = reference.current ? reference.current.offsetWidth + 'px' : 0;
    console.log(ref.current.style.left);
  };

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
          <div
            ref={ref}
            // style={{ left: indicator.left, width: indicator.width }}
            className={styles.marker}></div>
          <NavLink ref={firstRef} onClick={() => navActive(firstRef)} to="/" className={styles.design}>
            <img src={logo} alt="logo" />
            DESIGN ISRAEL
          </NavLink>
          <NavLink ref={secondRef} onClick={() => navActive(secondRef)} to="/services" className={styles.services}>
            {t('header_services')}
          </NavLink>
          <NavLink ref={thirdRef} onClick={() => navActive(thirdRef)} to="*" className={styles.services}>
            {t('header_cases')}
          </NavLink>
        </div>
      </div>
      <div className={styles.second__section}>
        <a href="#" className={styles.button}>
          {t('header_client')}
        </a>
        <LanguageFlags />
      </div>
    </div>
  );
};

export default Header;
