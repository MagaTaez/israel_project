import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Nexign.module.scss';

import headerImg from '../assets/Nexign_mainBg.png';
import bigPic from '../assets/Nexign_bigPic.png';
import nexign_1 from '../assets/nexign_1.png';
import nexign_2 from '../assets/nexign_2.png';
import nexign_3 from '../assets/nexign_3.png';
import nexign_4 from '../assets/nexign_4.png';
import nexign_5 from '../assets/nexign_5.png';
import nexign_6 from '../assets/nexign_6.png';
import nexign_7 from '../assets/nexign_7.png';
import nexign_8 from '../assets/nexign_8.png';
import nexign_9 from '../assets/nexign_9.png';
import nexign_10 from '../assets/nexign_10.png';
import nexign_11 from '../assets/nexign_11.png';

// import Nexign_video from '../assets/Nexign_video.mp4';

const Nexign = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>{t('nexign_header')}</h1>
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
        <div className={styles.subheader}>{t('video_task')}</div>
        <div className={styles.taskWrapper}>
          <p>
            {t('nexign_taskText1')}
            <br />
            <br />
            {t('nexign_taskText2')}
          </p>

          <aside>
            <div>{t('nexign_aside')}</div>
          </aside>
        </div>

        <div className={styles.subheader}>{t('startup_solut')}</div>
        <p>{t('nexign_solutText1')}</p>
        <p className={styles.quote}>{t('nexign_solutText2')}</p>
        <p>{t('nexign_solutText3')}</p>
        <div className={styles.bigPictureWrapper}>
          <img src={bigPic} alt="bigPic" />
          <span>{t('nexign_img')}</span>
        </div>
        <p>
          {t('nexign_solutText4')}
          <br />
          <br />
          {t('nexign_solutText5')}
          <br />
          <br />
          {t('nexign_solutText6')}
          <br />
          <br />
          {t('nexign_solutText7')}
          <br />
          <br />
          {t('nexign_solutText8')}
        </p>

        <div className={styles.subheader}>{t('nexign_frames')}</div>
        <div className={styles.wrapper3d}>
          <img src={nexign_1} alt="nexign_1" />
          <img src={nexign_2} alt="nexign_2" />
          <img src={nexign_3} alt="nexign_3" />
          <img src={nexign_4} alt="nexign_4" />
          <img src={nexign_5} alt="nexign_5" />
          <img src={nexign_6} alt="nexign_6" />
          <img src={nexign_7} alt="nexign_7" />
          <img src={nexign_8} alt="nexign_8" />
          <img src={nexign_9} alt="nexign_9" />
          <img src={nexign_10} alt="nexign_10" />
          <img src={nexign_11} alt="nexign_11" />
        </div>

        <div className={styles.subheader}>{t('servPage_result')}</div>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://vimeo.com/461371496"
            width="100%"
            height="100%"
            controls
            config={{
              vimeo: {
                playerOptions: { byline: true, controls: true },
              },
            }}
            className={styles.video}
          />
          {/* <video width="320" height="240" controls>
            <source src={Nexign_video} type="video/mp4" />
            <source src={Nexign_video} type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
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

export default Nexign;
