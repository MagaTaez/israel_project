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

const serviceArr = [
  { name: 'Animation', link: '#', img: animation },
  { name: '3D visualization', link: '#', img: visual },
  { name: 'Graphic and web design', link: '#', img: design },
  { name: 'Logos and corporate identity', link: '/logos', img: logos },
  { name: 'Photo retouching', link: '/retouching', img: photos },
  { name: 'Something else', link: '#', img: photos },
];

const Services = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card_section}>
        {serviceArr.map((item) => (
          <Link key={item.name} className={styles.link} to={item.link}>
            <div key={item.name} className={styles.card_wrapper}>
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
