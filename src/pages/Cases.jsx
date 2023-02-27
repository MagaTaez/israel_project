import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Masonry from 'react-masonry-css';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Cases.module.scss';

import vector from '../assets/Vector3.png';

import rabbit from '../assets/rabbit.png';
import interier from '../assets/interier_card.png';
import neon from '../assets/neon.png';
import car from '../assets/car.png';
import woman from '../assets/black_wo.png';
import exterier from '../assets/exterier.png';
import learn from '../assets/learn.png';
import plan from '../assets/plan.png';
import tomFord from '../assets/tomFord.png';
import art from '../assets/art_object.png';
import brochures from '../assets/brochures.png';
import hub from '../assets/inhub.png';
import swiss from '../assets/swiss_army.png';
import internet from '../assets/internet3g.png';
import visual3d from '../assets/3dbot1.png';
import Gravity_Card from '../assets/Gravity-Card.png';
import girl_comp from '../assets/girl_comp.png';
import calendar from '../assets/calendar.png';
import liitle_pen from '../assets/liitle_pen.png';
import card_corona from '../assets/card_corona.png';
import art_design from '../assets/art_design.png';

const Cases = () => {
  const { t } = useTranslation();

  const imageList = [
    { image: rabbit, style: styles.item1, link: '/logos/rabbit', category: 'Logos' },
    { image: interier, style: styles.item2, link: '/3dvisualization/interior', category: '3D visualization' },
    { image: neon, style: styles.item3, link: '/animation/linq', category: 'Animation' },
    { image: car, style: styles.item4, link: '/webdevelopment/eclipse', category: 'Web Development' },
    { image: woman, style: styles.item5, link: '/retouching', category: 'Retouching' },
    { image: exterier, style: styles.item6, link: '/3dvisualization/exterior', category: '3D visualization' },
    { image: learn, style: styles.item7, link: '/animation/itcom', category: 'Animation' },
    { image: plan, style: styles.item8, link: '/3dvisualization/architecture', category: '3D visualization' },
    { image: tomFord, style: styles.item9, link: '/retouching', category: 'Retouching' },
    { image: art, style: styles.item10, link: '/3dvisualization/artobject', category: '3D visualization' },
    { image: brochures, style: styles.item11, link: '/logos/vinyl', category: 'Logos' },
    { image: hub, style: styles.item12, link: '/animation/nhub', category: 'Animation' },
    { image: swiss, style: styles.item13, link: '/webdevelopment/valkirye', category: 'Web Development' },
    { image: internet, style: styles.item13, link: '/animation/nexign', category: 'Animation' },
    { image: visual3d, style: styles.item13, link: '/3dvisualization/park', category: '3D visualization' },
    { image: Gravity_Card, style: styles.item13, link: '/logos/videomaker', category: 'Logos' },
    { image: girl_comp, style: styles.item13, link: '/animation/smschain', category: 'Animation' },
    { image: calendar, style: styles.item13, link: '/logos/dali', category: 'Logos' },
    { image: liitle_pen, style: styles.item13, link: '/retouching', category: 'Retouching' },
    { image: card_corona, style: styles.item13, link: '/animation/koronapay', category: 'Animation' },
    { image: art_design, style: styles.item13, link: '/logos/poster', category: 'Logos' },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const types = [
    { type: 'All Cases', name: t('cases_all') },
    { type: 'Animation', name: t('cases_anim') },
    { type: '3D visualization', name: t('3D visualization') },
    // { type: 'Graphic & design', name: t('cases_design') },
    { type: 'Logos', name: t('cases_logos') },
    { type: 'Retouching', name: t('cases_retouche') },
    { type: 'Web Development', name: t('cases_dev') },
  ];

  const popupRef = React.useRef(null);

  //   console.log(types[selected]);

  // это список с отфильтрованными айтемами
  const filteredList = useMemo(() => {
    if (!selected || types[selected].type == 'All Cases') {
      return imageList;
    }
    return imageList.filter((item) => item.category == types[selected].type);
  }, [selectedCategory]);

  const onClickPopup = (i) => {
    setSelected(i);
    setSelectedCategory(imageList[i]);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !event.composedPath().includes(popupRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.casesWrapper}>
      <div className={styles.popupWrapper}>
        <button
          ref={popupRef}
          className={`${styles.casesButton} ${open ? styles.activeButton : ''}`}
          onClick={() => setOpen(!open)}>
          {types[selected].name}
          <img src={vector} alt="vector" />
        </button>
        <ul className={`${styles.popup} ${open == true ? styles.popupActive : ''}`}>
          {types.map((item, i) => (
            <li key={i} className={selected == i ? styles.activeType : ''} onClick={() => onClickPopup(i)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* breakpointCols={breakPoints} className={styles.cardContainer} columnClassName={styles.masonryColumn} */}
      <div className={styles.cardContainer}>
        {filteredList.map((item) => (
          <Link key={item.image} to={item.link} className={item.style}>
            <img src={item.image} alt={item.image} />
            <span>Cases</span>
          </Link>
        ))}
        {/* {imageList.map((item) => (
          <Link key={item.image} to={item.link} className={item.style}>
            <img src={item.image} alt={item.image} />
            <span>Cases</span>
          </Link>
        ))} */}

        {/* <Link className={styles.item1}>
          <img src={rabbit} alt="rabbit" />
          <span>Cases</span>
        </Link>
        <Link className={styles.item2}>
          <img src={interier} alt="interier" />
          <span>Cases</span>
        </Link>
        <Link className={styles.item3}>
          <img src={neon} alt="neon" />
          <span>Cases</span>
        </Link>
        <Link className={styles.item4}>
          <img src={car} alt="car" />
          <span>Cases</span>
        </Link> */}
      </div>

      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Cases;
