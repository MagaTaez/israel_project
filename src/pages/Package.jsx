import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Package.module.scss';

import headerImg from '../assets/package_main.png';
import pack1 from '../assets/package_1.png';
import pack2 from '../assets/package_2.png';
import pack3 from '../assets/package_3.png';

const Package = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" />
          <h1>{t('package_header')}</h1>
        </div>
      </section>
      <section className={styles.description}>
        <h3>{t('sturm_subtitle')}</h3>
        <article>
          <p>{t('package_text1')}</p>
          <br /> <br />
          <p>{t('package_text2')}</p>
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
        <div className={styles.topWrapper}>
          <img src={pack1} alt="image" />
          <p>{t('package_label')}</p>
        </div>
        <div className={styles.botWrapper}>
          <img src={pack2} alt="image" />
          <img src={pack3} alt="image" />
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Package;
