import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Sturmgraf.module.scss';

import mainBg from '../assets/sturmgrafBack.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import telegram from '../assets/telegram.png';
import graffiti from '../assets/writing.png';
import rabbits from '../assets/mix-rabbits.png';
import wall from '../assets/wall.png';
import blue from '../assets/color-blue.png';
import shirts from '../assets/shirts.png';

const Sturmgraf = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={mainBg} alt="bgImage" /* className={styles.image} */ />
        </div>
        <div className={styles.article}>
          <h1>Logo for car shop “Sturmgraf”</h1>
          <div className={styles.icons}>
            <Link className={styles.icons_wrapper} to="#">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link className={styles.icons_wrapper} to="#">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link className={styles.icons_wrapper} to="#">
              <img src={telegram} alt="telegram" />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.description}>
        <h3>A task</h3>
        <article>
          To develop a logo for an online store with auto products. The store is also engaged in the production and sale
          of stickers for auto topics.
          <br />
          The client chose the rabbit from the cartoon "The Secret Life of Pets" as a symbol of their brand. The client
          wanted a bright and catchy logo.
        </article>
        <div className={styles.graffiti_wrapper}>
          <img src={graffiti} alt="graffiti" />
        </div>
        <h3>Decision</h3>
        <article>
          The face of the logo is an animal - a rabbit. <br />
          Details, references, emotion and location of the rabbit were discussed with the client in advance. <br />
          To visualize the solution, we used the “Tag type” font. Font inspired by graffiti tags.
        </article>
        <div className={styles.markup}>
          <div className={styles.markup_one}>
            <img src={blue} alt="blue" />
          </div>
          <div className={styles.markup_two}></div>
          <div className={styles.markup_three}></div>
          <div className={styles.markup_four}></div>
        </div>
        <div className={styles.logo_images}>
          <img src={rabbits} alt="rabbits" />
        </div>
        <h3>Merch</h3>
        <div className={styles.logo_images}>
          <img src={shirts} alt="shirts" />
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.graffiti_img}>
          <img src={wall} alt="graffiti-wall" />
        </div>
        <div className={styles.form}>
          <Form />
          <div className={styles.contacts}>
            <Contacts />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sturmgraf;
