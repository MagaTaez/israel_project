import React from 'react';
import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Home.module.scss';
const Home = () => {
  return (
    <div className={styles.home_wrapper}>
      <h3 className={styles.title1}>CREATIVE</h3>
      <h3 className={styles.title2}>CONTENT</h3>
      <h3 className={styles.title3}>PRODUCTION</h3>
      <p className={styles.text}>
        We develop creative ideas and strategies to solve business problems. We deal with complex marketing projects,
        create 2D and 3D animation, video, branding and graphic design.
      </p>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
