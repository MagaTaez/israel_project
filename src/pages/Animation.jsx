import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import styles from './Animation.module.scss';

import { Link } from 'react-router-dom';

import arrow from '../assets/Arrow.png';
import korona from '../assets/korona.png';
import purple from '../assets/animate_purple.png';
import girl from '../assets/girl.png';
import intis from '../assets/intis.png';

import learn from '../assets/animate_learn.png';
import internet from '../assets/animate_internet.png';
import cats from '../assets/cats.png';
import inhub from '../assets/animate_inhub.png';
import Contacts from '../components/Contacts';
import Form from '../components/Form';

import anim_1 from '../assets/animate_1.png';
import anim_2 from '../assets/animate_2.png';
import anim_3 from '../assets/animate_3.png';
import anim_4 from '../assets/animate_4.png';

const Animation = () => {
  const { t } = useTranslation();

  const detailedList = [
    {
      count: '1.',
      info: t('animaton_list_info1'),
      text: t('animation_list_text1'),
    },
    {
      count: '2.',
      info: t('animaton_list_info2'),
      text: t('animation_list_text2'),
    },
    {
      count: '3.',
      info: t('animaton_list_info3'),
      text: t('animation_list_text3'),
    },
  ];

  const TopImages = [
    { url: korona, name: '/animation/koronapay' },
    { url: purple, name: '/animation/linq' },
    { url: girl, name: '/animation/smschain' },
    { url: intis, name: '/animation/itvideo' },
  ];
  const BottomImages = [
    { url: learn, name: '/animation/itcom' },
    { url: internet, name: '/animation/nexign' },
    { url: cats, name: '/animation/startup' },
    { url: inhub, name: '/animation/nhub' },
  ];
  const notesArr = [];

  const animateTypes = [
    {
      picture: anim_1,
      header: t('animaton_type_header1'),
      text: t('animaton_type_text1'),
    },
    {
      picture: anim_2,
      header: t('animaton_type_header2'),
      text: t('animaton_type_text2'),
    },
    { picture: anim_3, header: t('animaton_type_header3'), text: t('animaton_type_text3') },
    {
      picture: anim_4,
      header: t('animaton_type_header4'),
      text: t('animaton_type_text4'),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('animation_header')}</h1>
      <div className={styles.service}>
        <span>{t('servPage_service')}</span>
        <div className={styles.dots_wrapper}>
          <div className={styles.dots_long}></div>
          <div className={styles.dots_short}></div>
          <div className={styles.dots_short}></div>
          <div className={styles.dots_short}></div>
          <div className={styles.dots_short}></div>
        </div>
      </div>
      <hr />
      <section className={styles.info}>
        <article className={styles.info_left}>
          <h4>{t('animation_subheader1')}</h4>
          <p>{t('animation_text1')}</p>
        </article>
        <aside className={styles.info_right}>
          <div>
            <a href="#">{t('servPage_arrow')}</a>
            <img src={arrow} alt="arrow" />
          </div>
          <p>{t('servPage_arrText')}</p>
        </aside>
      </section>
      {/* <article className={styles.article}>{secondText}</article> */}
      <section className={styles.works}>
        <h2>{t('animation_subheader2')}</h2>

        {/* подробный stagesList*/}
        {detailedList.length > 0 && (
          <>
            <ol className={styles.detailList}>
              {detailedList.map((item) => (
                <li className={styles.detailList_item}>
                  <span>{item.count}</span> {item.info}
                  {item.image !== undefined && <img src={item.image} className={styles.icons3d} alt="icon" />}
                  <hr />
                  <article>{item.text}</article>
                </li>
              ))}
            </ol>
          </>
        )}

        <h2>{t('animation_subheader3')}</h2>
        <div className={styles.typesWrapper}>
          {animateTypes.map((item, i) => (
            <div key={i} className={styles.types}>
              <img src={item.picture} alt="picture" />
              <div>
                <h5>{item.header}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className={styles.workSubtitle}>{t('servPage_examples')}</h3>
        {/* а это динамическая карусель */}
        {TopImages.length > 0 && BottomImages.length > 0 && (
          <div className={styles.carouselBigWrapper}>
            <div className={styles.works_smallWrapper}>
              <div className={`${styles.works_carousel} ${styles.animate}`}>
                {/* we need to make them twice for correct animation */}

                <div className={styles.works_topCarousel}>
                  {TopImages?.map((item) => (
                    <Link className={styles.works_card} to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
                <div className={styles.works_topCarousel}>
                  {TopImages?.map((item) => (
                    <Link className={styles.works_card} to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* нижняя карусель */}
            <div className={styles.works_smallWrapper}>
              <div className={cn(styles.works_carousel, styles.animateRight)}>
                <div className={styles.works_bottomCarousel}>
                  {BottomImages?.map((item) => (
                    <Link className={styles.works_card} to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case1}>Case</p>
                    </Link>
                  ))}
                </div>
                <div className={styles.works_bottomCarousel}>
                  {BottomImages?.map((item) => (
                    <Link className={styles.works_card} to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case1}>Case</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Animation;
