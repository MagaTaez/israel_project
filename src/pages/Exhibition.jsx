import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Exhibition.module.scss';

import little1 from '../assets/dali_little1.png';
import little2 from '../assets/dali_little2.png';
import res1 from '../assets/dali_res1.png';
import res2 from '../assets/dali_res2.png';
import res3 from '../assets/dali_res3.png';
import res4 from '../assets/dali_res4.png';

import headerImg from '../assets/poster_main.png';
import poster_1 from '../assets/poster_little1.png';
import poster_2 from '../assets/poster_little2.png';
import poster_3 from '../assets/poster_little3.png';
import poster_4 from '../assets/poster_little4.png';
import poster_5 from '../assets/poster_little5.png';
import result from '../assets/poster_res.png';

import pack1 from '../assets/package_1.png';
import pack2 from '../assets/package_2.png';
import pack3 from '../assets/package_3.png';

const Exhibition = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" />
          <h1>{t('exhibition_header')}</h1>
        </div>
      </section>
      <section className={styles.description}>
        <h3>{t('sturm_subtitle')}</h3>
        <article>
          <p>{t('exhibition_text1')}</p>
          <br /> <br />
          <p>{t('exhibition_text2')}</p>
        </article>

        <div className={styles.topWrapper}>
          <img src={poster_1} alt="image" />
          <img src={poster_2} alt="image" />
          <img src={poster_3} alt="image" />
          <img src={poster_4} alt="image" />
          <img src={poster_5} alt="image" />
        </div>
        <div className={styles.imageText}>
          <p>{t('exhibition_option')}</p>
        </div>
        <h3>{t('servPage_result')}</h3>
        <div className={styles.botWrapper}>
          <img src={result} alt="image" />
          <p>{t('exhibition_res')}</p>
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

export default Exhibition;
