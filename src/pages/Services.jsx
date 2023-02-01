import React from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Services.module.scss';

import animation from '../assets/Animation.png';
import visual from '../assets/3DVis.png';
import design from '../assets/Graphic.png';
import logos from '../assets/Logos.png';
import photos from '../assets/Photos.png';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const serviceArr = [
    { name: t('services_animation'), link: '#', img: animation },
    { name: t('services_viz'), link: '#', img: visual },
    { name: t('services_graph'), link: '#', img: design },
    { name: t('services_logos'), link: '/logos', img: logos },
    { name: t('services_photo'), link: '/retouching', img: photos },
    { name: t('services_smthing'), link: '#', img: photos },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.card_section}>
        {serviceArr.map((item) => (
          <Link key={item.name} className={styles.link} to={item.link}>
            <div className={styles.card_wrapper}>
              <img src={item.img} alt={item.name} />
              <div className={styles.service}>Service</div>
            </div>
            <span className={styles.name}>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Services;
