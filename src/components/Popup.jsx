import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import closeIcon from '../assets/close.png';
import logo from '../assets/logo.png';

import styles from './PopUp.module.scss';

const Popup = ({ setOpened, opened }) => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <div className={cn(styles.overlay )}> */}
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        {/* <div className={styles.overlay}> */}
        <div className={styles.drawer}>
          <div className={styles.top}>
            <img onClick={() => setOpened(false)} className={styles.top_closeIcon} src={closeIcon} alt="closeIcon" />
            <div className={styles.top_logo}>
              <img src={logo} alt="logo" />
              <NavLink to="/" onClick={() => setOpened(false)}>
                DESIGN ISRAEL
              </NavLink>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.middle_top}>
              <NavLink to="/services" onClick={() => setOpened(false)} className={styles.middle_services}>
                Services
              </NavLink>
              <NavLink to="/cases" onClick={() => setOpened(false)} className={styles.middle_services}>
                Cases
              </NavLink>
            </div>
            <hr />
            <div className={styles.middle_left}>
              <div>{t('popup_develop')}</div>
              <div>{t('popup_web')}</div>
              <div>{t('popup_3d')}</div>
              <div>{t('popup_motion')}</div>
              <div>{t('popup_photo')}</div>
            </div>
            <div className={styles.middle_center}>
              <div>{t('popup_agency')}</div>
              <div>{t('popup_career')}</div>
              <div>{t('popup_reviews')}</div>
            </div>
            <div className={styles.middle_right}>
              <div className={styles.middle_project}>{t('popup_discuss')}</div>
              <div className={styles.middle_mail}>Jerusalem@mail.ru</div>
              <div className={styles.middle_phone}>+7 (932) 213-45-63</div>
              <a href="#" className={styles.button}>
                {t('header_client')}
              </a>
              <div className={styles.middle_cooperation}>{t('popup_coop')}</div>
              <div className={styles.middle_lastmail}>Jerusalem@mail.ru</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
