import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Home.module.scss';
const Home = () => {
  // Transation
  const { t } = useTranslation();

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.header_wrapper}>
        <h3 className={styles.title1}>{t('main_title1')}</h3>
        <h3 className={styles.title2}>{t('main_title2')}</h3>
        <h3 className={styles.title3}>{t('main_title3')}</h3>
        <span className={styles.flare}></span>
      </div>
      <p className={styles.text}>{t('home_text')}</p>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
