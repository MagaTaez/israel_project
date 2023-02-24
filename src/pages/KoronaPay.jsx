import React from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './KoronaPay.module.scss';

import headerImg from '../assets/korona_mainBg.png';
import korona3d_1 from '../assets/korona3d_1.png';
import korona3d_2 from '../assets/korona3d_2.png';
import korona3d_3 from '../assets/korona3d_3.png';
import korona_stil1 from '../assets/korona_stil1.png';
import korona_stil2 from '../assets/korona_stil2.png';
import korona_stil3 from '../assets/korona_stil3.png';
import korona_scene1 from '../assets/korona_scene1.png';
import korona_scene2 from '../assets/korona_scene2.png';
import korona_scene3 from '../assets/korona_scene3.png';
import korona_scene4 from '../assets/korona_scene4.png';
import korona_scene5 from '../assets/korona_scene5.png';
import korona_scene6 from '../assets/korona_scene6.png';
import korona_scene7 from '../assets/korona_scene7.png';
import korona_ny1 from '../assets/korona_ny1.png';
import korona_ny2 from '../assets/korona_ny2.png';
import korona_banner1 from '../assets/korona_banner1.png';
import korona_banner2 from '../assets/korona_banner2.png';

// import koronaVideo from '../assets/KoronaVideo1.mp4';

const KoronaPay = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('korona_header')}</h1>
        </div>
        <div className={styles.article}>
          <div className={styles.icons}>
            {/* <Link className={styles.icons_wrapper} to="#">
               <img src={facebook} alt="facebook" />
             </Link>
             <Link className={styles.icons_wrapper} to="#">
               <img src={instagram} alt="instagram" />
             </Link>
             <Link className={styles.icons_wrapper} to="#">
               <img src={telegram} alt="telegram" />
             </Link> */}
          </div>
        </div>
      </section>
      <section className={styles.description}>
        <h2 className={styles.subheader}>{t('sturm_subtitle')}</h2>
        <p>
          {t('korona_task_text1')}
          <br />
          <br />
          {t('korona_task_text2')}
          <br />
          <br />
          {t('korona_task_text3')}
        </p>
        <div className={styles.subheader}>{t('korona_3d')}</div>
        <div className={styles.wrapper3d}>
          <img src={korona3d_1} alt="korona3d_1" />
          <img src={korona3d_2} alt="korona3d_2" />
          <img src={korona3d_3} alt="korona3d_3" />
        </div>

        <div className={styles.subheader}></div>
        <p>{t('korona_stil_text')}</p>
        <div className={styles.wrapperStill}>
          <div className={styles.imgWrapper}>
            <img src={korona_stil1} alt="korona_stil1" />
            <span>{t('korona_stil_1')}</span>
          </div>
          <div className={styles.imgWrapper}>
            <img src={korona_stil2} alt="korona_stil1" />
            <span>{t('korona_stil_2')}</span>
          </div>
          <div className={styles.imgWrapper}>
            <img src={korona_stil3} alt="korona_stil1" />
            <span>{t('korona_stil_3')}</span>
          </div>
        </div>

        <div className={styles.subheader}>{t('korona_scenes')}</div>
        <div className={styles.scenesWrapper}>
          <img src={korona_scene1} alt="korona_scene1" />
          <img src={korona_scene2} alt="korona_scene2" />
          <img src={korona_scene3} alt="korona_scene3" />
          <img src={korona_scene4} alt="korona_scene4" />
          <img src={korona_scene5} alt="korona_scene5" />
          <img src={korona_scene6} alt="korona_scene6" />
          <img src={korona_scene7} alt="korona_scene7" />
        </div>

        <div className={styles.subheader}>{t('korona_ny')}</div>
        <p>{t('korona_ny_text')}</p>
        <div className={styles.nyWrapper}>
          <img src={korona_ny1} alt="korona_ny1" />
          <img src={korona_ny2} alt="korona_ny2" />
        </div>

        <div className={styles.subheader}>{t('korona_anim')}</div>
        <div className={styles.videoWrapper}>
          <p>{t('korona_anim_text')}</p>
          <div>
            <iframe
              className={styles.video}
              src="https://player.vimeo.com/video/493357085?h=d3dc645eac&byline=0&portrait=0"
              // width="640"
              // height="300"
              frameborder="0"
              allow="autoplay fullscreen"
              allowfullscreen
              frameborder="0"
              allow="autoplay fullscreen picture-in-picture"
              allowfullscreen></iframe>
          </div>
          {/* <script src="https://player.vimeo.com/api/player.js"></script> */}

          {/* <video width="320" height="240" controls autoPlay muted>
            <source src={koronaVideo} type="video/mp4" />
            <source src={koronaVideo} type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <div className={styles.contacts}>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default KoronaPay;
