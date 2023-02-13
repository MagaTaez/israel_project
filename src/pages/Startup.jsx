import React from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Startup.module.scss';

import headerImg from '../assets/Startup_bg.png';
import startup_0 from '../assets/startup_0.png';
import startup_1 from '../assets/startup_1.png';
import startup_2 from '../assets/startup_2.png';
import startup_3 from '../assets/startup_3.png';
import startup_4 from '../assets/startup_4.png';
import startup_5 from '../assets/startup_5.png';
import BitSugar_video from '../assets/BitSugar_video.mp4';

const Startup = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('startup_header')}</h1>
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
        <div className={styles.subheader}>{t('sturm_subtitle')}</div>
        <p>{t('startup_taskText')}</p>

        <div className={styles.subheader}>{t('startup_solut')}</div>
        <p>{t('startup_solutText')}</p>

        <div className={styles.subheader}>{t('startup_ill')}</div>
        <div className={styles.wrapper3d}>
          <img src={startup_0} alt="startup_0" />
          <img src={startup_1} alt="startup_1" />
          <img src={startup_2} alt="startup_2" />
          <img src={startup_3} alt="startup_3" />
          <img src={startup_4} alt="startup_4" />
          <img src={startup_5} alt="startup_5" />
        </div>

        <div className={styles.subheader}>{t('servPage_result')}</div>
        <div className={styles.videoWrapper}>
          <video width="320" height="240" controls>
            <source src={BitSugar_video} type="video/mp4" />
            <source src={BitSugar_video} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
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

export default Startup;
