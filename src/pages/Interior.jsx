import React from 'react';
import { useTranslation } from 'react-i18next';

import headerImg from '../assets/interior_1.png';
import taskImg from '../assets/interior_2.png';
import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Interior.module.scss';

const Interior = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('interior_header')}</h1>
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
        <h3>{t('sturm_subtitle')}</h3>
        <article>
          {t('interior_task1')}
          <br /> <br />
          {t('interior_task2')}
        </article>
        <div className={styles.taskImg_wrapper}>
          <img src={taskImg} alt="graffiti" />
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        {/* <div className={styles.contacts}> */}
        <Contacts />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Interior;
