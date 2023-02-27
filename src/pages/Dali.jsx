import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Dali.module.scss';

import headerImg from '../assets/dali_bg.png';
import little1 from '../assets/dali_little1.png';
import little2 from '../assets/dali_little2.png';
import res1 from '../assets/dali_res1.png';
import res2 from '../assets/dali_res2.png';
import res3 from '../assets/dali_res3.png';
import res4 from '../assets/dali_res4.png';

const Dali = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('dali_header')}</h1>
        </div>
      </section>
      <section className={styles.description}>
        <h3>{t('sturm_subtitle')}</h3>
        <article>
          <p>{t('dali_text1')}</p>
          <br /> <br />
          <p>{t('dali_text2')}</p>
        </article>
        <div className={styles.topImgWrapper}>
          <div className={styles.imageLittle}>
            <img src={little1} alt="image" />
            <p>{t('dali_pic1')}</p>
          </div>
          <div className={styles.imageLittle}>
            <img src={little2} alt="image" />
            <p>{t('dali_pic2')}</p>
          </div>
        </div>
        <h3>{t('servPage_result')}</h3>
        <img className={styles.bigImage} src={res1} alt="res1" />
        <div className={styles.botWrapper}>
          <img className={styles.bigImage} src={res2} alt="res2" />
          <img className={styles.bigImage} src={res3} alt="res3" />
        </div>

        <div className={styles.botImage}>
          <img src={res4} alt="image" />
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Dali;
