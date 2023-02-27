import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Vinyl.module.scss';

import little1 from '../assets/dali_little1.png';
import little2 from '../assets/dali_little2.png';
import res1 from '../assets/dali_res1.png';
import res2 from '../assets/dali_res2.png';
import res3 from '../assets/dali_res3.png';
import res4 from '../assets/dali_res4.png';

import headerImg from '../assets/vinyl_main.png';
import vinyl1 from '../assets/vinyl_1.png';
import vinyl2 from '../assets/vinyl_2.png';
import vinyl3 from '../assets/vinyl_3.png';
import big from '../assets/vinyl_big.png';
import vinyl_min1 from '../assets/vinyl_mini1.png';
import vinyl_min2 from '../assets/vinyl_mini2.png';
import vinyl_min3 from '../assets/vinyl_mini3.png';

const Vinyl = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('vinyl_header')}</h1>
        </div>
      </section>
      <section className={styles.description}>
        <h3>{t('sturm_subtitle')}</h3>
        <article>
          <p>{t('vinyl_text1')}</p>
          <br />
          <p>{t('vinyl_text2')}</p>
        </article>
        {/* <div className={styles.topImgWrapper}>
          <div className={styles.imageLittle}>
            <img src={little1} alt="image" />
            <p>La persistencia de la memoria, 1931</p>
          </div>
          <div className={styles.imageLittle}>
            <img src={little2} alt="image" />
            <p>Guernica, 1937</p>
          </div>
        </div> */}
        <h3>{t('servPage_result')}</h3>

        <div className={styles.botImage}>
          <img src={big} alt="image" />
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Vinyl;
