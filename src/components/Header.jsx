import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { ThemeContext } from '../App';

import { useResize } from '../services/resizeHook';

import LanguageFlags from './LanguageFlags';

import styles from './Header.module.scss';
import logo from '../assets/logo.png';

const Header = ({ setOpened, opened }) => {
  // const [leftRef, setLeft] = useState(0);
  // const [widthRef, setWidth] = useState(0);

  const ref = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const [currentRef, setCurrentRef] = useState(firstRef);

  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation();

  const sizeHook = useResize();

  // тут мы делаем анимацию для активного элемента в навигации
  // useEffect(() => {
  //   navActive();
  //   console.log({ left: leftRef, width: widthRef });
  // }, []);

  const navActive = (reference) => {
    setCurrentRef(reference);
    ref.current.style.left = reference.current ? reference.current.offsetLeft + 'px' : 0;
    ref.current.style.width = reference.current ? reference.current.offsetWidth + 'px' : 0;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navActive(currentRef);
    }, 250);
    navActive(currentRef);
    return () => clearTimeout(timer);
  }, [sizeHook]);

  // const marginLeftRef = useCallback(
  //   (node) => {
  //     if (node !== null) {
  //       setLeft(node.getBoundingClientRect().left);
  //       setWidth(node.getBoundingClientRect().width);
  //     }
  //   },
  //   [theme],
  // );

  const handleClick = () => {
    setOpened(true);
  };

  return (
    <div className={`${styles.wrapper} ${theme === 'reversed' ? styles.wrapper_reversed : ''}`}>
      <div className={`${styles.first__section} ${theme === 'reversed' ? styles.first__section_reversed : ''}`}>
        <div className={styles.bar__bigwrapper}>
          <div className={styles.flags}>
            <LanguageFlags />
          </div>
          <div onClick={handleClick} className={styles.bar__wrapper}>
            <div className={`${opened ? styles.change1 : ''} ${styles.bar1}`}></div>
            <div className={`${opened ? styles.change2 : ''} ${styles.bar2}`}></div>
            <div className={`${opened ? styles.change3 : ''} ${styles.bar3}`}></div>
          </div>
        </div>
        <div className={`${styles.sections} ${theme === 'reversed' ? styles.sections_reversed : ''}`}>
          <div ref={ref} /* style={{ left: leftRef, width: widthRef }} */ className={styles.marker}></div>
          <NavLink ref={firstRef} onClick={() => navActive(firstRef)} to="/" className={styles.design}>
            <img src={logo} alt="logo" />
            DESIGN ISRAEL
          </NavLink>
          <NavLink ref={secondRef} onClick={() => navActive(secondRef)} to="/services" className={styles.services}>
            {t('header_services')}
          </NavLink>
          <NavLink ref={thirdRef} onClick={() => navActive(thirdRef)} to="/cases" className={styles.services}>
            {t('header_cases')}
          </NavLink>
        </div>
      </div>
      <div className={`${styles.second__section} ${theme === 'reversed' ? styles.second__section_reversed : ''}`}>
        <a href="#" className={`${styles.button} ${theme === 'reversed' ? styles.button_reversed : ''}`}>
          {t('header_client')}
        </a>
        <LanguageFlags />
      </div>
    </div>
  );
};

export default Header;
