import React from 'react';
import { useTranslation } from 'react-i18next';
import Contacts from '../components/Contacts';
import Form from '../components/Form';
import ReactPlayer from 'react-player';

import styles from './Linq.module.scss';

import headerImg from '../assets/Linq.main.png';

const Linq = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>LINQ</h1>
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://vimeo.com/761888416/2768f791e0"
            width="100%"
            height="100%"
            // controls
            config={{
              vimeo: {
                playerOptions: { byline: true, controls: true },
              },
            }}
            className={styles.video}
          />
          {/* <video width="320" height="240" controls>
            <source src={Sms_video} type="video/mp4" />
            <source src={Sms_video} type="video/ogg" />
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

export default Linq;
