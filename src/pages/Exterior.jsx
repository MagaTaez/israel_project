import React from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Exterior.module.scss';

import headerImg from '../assets/exterior_header.png';
import taskImg from '../assets/exterior_house.png';
import exterior1 from '../assets/exterior_1.png';
import exterior2 from '../assets/exterior_2.png';
import exterior3 from '../assets/exterior_3.png';
import exterior4 from '../assets/exterior_4.png';

const Exterior = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('ext_header')}</h1>
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
        <article>{t('ext_text')}</article>
        <div className={styles.taskImg_wrapper}>
          <img src={taskImg} alt="graffiti" />
          <h2>{t('ext_imgText')}</h2>
        </div>
      </section>
      <section className={styles.imgExamples}>
        <img src={exterior1} alt="exterior1" />
        <img src={exterior2} alt="exterior2" />
        <img src={exterior3} alt="exterior3" />
        <img src={exterior4} alt="exterior4" />
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

export default Exterior;
