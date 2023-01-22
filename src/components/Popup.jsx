import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import closeIcon from '../assets/close.png';
import logo from '../assets/logo.png';
import styles from './PopUp.module.scss';

const Popup = ({ setOpened, opened }) => {
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
              <h4>DESIGN ISRAEL</h4>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.middle_top}>
              <NavLink to="/services" className={styles.middle_services}>
                Services
              </NavLink>
              <NavLink to="*" className={styles.middle_services}>
                Cases
              </NavLink>
            </div>
            <hr />
            <div className={styles.middle_left}>
              <div>Develop a website</div>
              <div>Web design</div>
              <div>3D visualization</div>
              <div>Motion design</div>
              <div>Photo retouching</div>
            </div>
            <div className={styles.middle_center}>
              <div>Agency</div>
              <div>Career</div>
              <div>Reviews</div>
            </div>
            <div className={styles.middle_right}>
              <div className={styles.middle_project}>Discuss the project</div>
              <div className={styles.middle_mail}>Jerusalem@mail.ru</div>
              <div className={styles.middle_phone}>+7 (932) 213-45-63</div>
              <a href="#" className={styles.button}>
                Become a client
              </a>
              <div className={styles.middle_cooperation}>Cooperation</div>
              <div className={styles.middle_lastmail}>Jerusalem@mail.ru</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
