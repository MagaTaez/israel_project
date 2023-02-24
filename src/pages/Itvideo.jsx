import React from 'react';
import { useTranslation } from 'react-i18next';
import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Itvideo.module.scss';

import headerImg from '../assets/ItVideo_main.png';

// import ItVid from '../assets/Itvideo_video.mp4';

const Itvideo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>Sponsored screensaver for Festival Beach event</h1>
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.videoWrapper}>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/722539318?h=f335fa161c"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay fullscreen picture-in-picture"
            allowfullscreen></iframe>
          {/* <video width="320" height="240" controls>
            <source src={ItVid} type="video/mp4" />
            <source src={ItVid} type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
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

export default Itvideo;
