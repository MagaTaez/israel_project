import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Integrity.module.scss';
import mainBg from '../assets/int_mainBg.png';
import text_1 from '../assets/int_text1.png';
import text_2 from '../assets/int_text2.png';
import left_1 from '../assets/int_left1.png';
import left_2 from '../assets/int_left2.png';
import left_3 from '../assets/int_left3.png';
import left_4 from '../assets/int_left4.png';
import right_1 from '../assets/int_right1.png';
import right_2 from '../assets/int_right2.png';
import right_3 from '../assets/int_right3.png';
import right_4 from '../assets/int_right4.png';
import bottomImg from '../assets/int_bottom.png';

const Integrity = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={mainBg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('integrity_header')}</h1>
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
        <h2>{t('sturm_subtitle')}</h2>
        <article>{t('integrity_text1')}</article>
        <h3>{t('exlipse_idea')}</h3>
        <article>
          {t('integrity_idea1')}
          <br /> <br />
          <b>Josefin Sans </b> {t('integrity_idea2')}
          <br /> <br />
          <img className={styles.imgText} src={text_1} alt="text_example" />
          <br /> <br />
          <strong>Amiri Quran Colored </strong>
          {t('integrity_idea3')}
          <br /> <br />
          <img className={styles.imgText} src={text_2} alt="text_example" />
        </article>
        <h3>{t('murm_style')}</h3>
        <article>{t('integrity_idea4')}</article>

        <div className={styles.images}>
          <div className={styles.images_left}>
            <div className={styles.leftTop}>
              <div>
                <img src={left_1} alt="siteImage1" />
              </div>
              <div>
                <img src={left_2} alt="siteImage2" />
              </div>
            </div>
            <div className={styles.leftBottom}>
              <div>
                <img src={left_3} alt="siteImage3" />
              </div>
              <div>
                <img src={left_4} alt="siteImage4" />
              </div>
            </div>
          </div>
          <div className={styles.images_right}>
            <img src={right_1} alt="valk_side1" />
            <img src={right_2} alt="valk_side2" />
            <img src={right_3} alt="valk_side3" />
            <img src={right_4} alt="valk_side4" />
          </div>
        </div>

        <h3>{t('servPage_result')}</h3>

        <img className={styles.bottomImage} src={bottomImg} alt="bottomImg" />
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
export default Integrity;
