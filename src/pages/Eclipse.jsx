import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Eclipse.module.scss';
import mainBg from '../assets/eclipse_bg.png';
import ecl_text1 from '../assets/eclipse_font1.png';
import ecl_text2 from '../assets/eclipse_font2.png';
import left1 from '../assets/eclipse_left1.png';
import left2 from '../assets/eclipse_left2.png';
import left3 from '../assets/eclipse_left3.png';
import left4 from '../assets/eclipse_left4.png';
import right1 from '../assets/eclipse_right1.png';
import right2 from '../assets/eclipse_right2.png';
import right3 from '../assets/eclipse_right3.png';
import bottomImg from '../assets/eclipse_bottom.png';

const Eclipse = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={mainBg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('exlipse_header')}</h1>
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
        <article>{t('exlipse_text1')}</article>
        <h3>{t('exlipse_idea')}</h3>
        <article>
          {t('exlipse_idea1')}
          <br /> <br />
          {t('exlipse_idea2')}
          <br /> <br />
          <b>JOST </b>
          {t('exlipse_idea3')}
          <br /> <br />
          <img className={styles.imgText} src={ecl_text1} alt="text_example" />
          <br /> <br />
          <strong>Julius Sans One </strong> {t('exlipse_idea4')}
          <br /> <br />
          <img className={styles.imgText} src={ecl_text2} alt="text_example" />
        </article>
        <h3>Style</h3>
        <article>
          {t('exlipse_style1')}
          <br /> <br />
          {t('exlipse_style2')}
        </article>

        <div className={styles.images}>
          <div className={styles.images_left}>
            <div className={styles.leftTop}>
              <div>
                <img src={left1} alt="siteImage1" />
              </div>
              <div>
                <img src={left2} alt="siteImage2" />
              </div>
            </div>
            <div className={styles.leftBottom}>
              <div>
                <img src={left3} alt="siteImage3" />
              </div>
              <div>
                <img src={left4} alt="siteImage4" />
              </div>
            </div>
          </div>
          <div className={styles.images_right}>
            <img src={right1} alt="valk_side1" />
            <img src={right2} alt="valk_side2" />
            <img src={right3} alt="valk_side3" />
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

export default Eclipse;
