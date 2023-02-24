import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Valkirye.module.scss';
import mainBg from '../assets/valk_topBg.png';
import valk1 from '../assets/valk_1.png';
import valk2 from '../assets/valk_2.png';
import valk3 from '../assets/valk_3.png';
import valk4 from '../assets/valk_4.png';
import valk_side1 from '../assets/valk_side1.png';
import valk_side2 from '../assets/valk_side2.png';
import valk_side3 from '../assets/valk_side3.png';
import bottomImg from '../assets/valk_bottom.png';
import valk_text1 from '../assets/valk_text1.png';
import valk_text2 from '../assets/valk_text2.png';

const Valkirye = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={mainBg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('valk_header')}</h1>
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
        <article>{t('valk_text1')}</article>
        <h3>{t('valk_idea')}</h3>
        <article>
          {t('valk_idea_1')}
          <br /> <br />
          {t('valk_idea_2')}
          <br /> <br />
          <span>RALEWAY </span> {t('valk_idea_3')}
          <br /> <br />
          <img className={styles.imgText} src={valk_text1} alt="text_example" />
          <br /> <br />
          <strong>Readex Pro</strong> {t('valk_idea_4')}
          <br /> <br />
          <img className={styles.imgText} src={valk_text2} alt="text_example" />
        </article>
        <h3>{t('valk_style')}</h3>
        <article>
          {t('valk_ill')}
          <br /> <br />
          {t('valk_style_1')}
          <br /> <br />
          {t('valk_style_2')}
        </article>

        <div className={styles.images}>
          <div className={styles.images_left}>
            <div className={styles.leftTop}>
              <div>
                <img src={valk1} alt="siteImage1" />
              </div>
              <div>
                <img src={valk2} alt="siteImage2" />
              </div>
            </div>
            <div className={styles.leftBottom}>
              <div>
                <img src={valk3} alt="siteImage3" />
              </div>
              <div>
                <img src={valk4} alt="siteImage4" />
              </div>
            </div>
          </div>
          <div className={styles.images_right}>
            <img src={valk_side1} alt="valk_side1" />
            <img src={valk_side2} alt="valk_side2" />
            <img src={valk_side3} alt="valk_side3" />
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

export default Valkirye;
