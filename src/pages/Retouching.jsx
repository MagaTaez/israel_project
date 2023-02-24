import React from 'react';
import ServicePage from '../components/ServicePage';
import { useTranslation } from 'react-i18next';

import styles from './Retouching.module.scss';

import dtop1 from '../assets//3dtop1.png';
import dtop2 from '../assets/3dtop2.png';
import dtop3 from '../assets/3dtop3.png';
import dbot1 from '../assets/3dbot1.png';
import dbot2 from '../assets/3dbot2.png';

import vis1 from '../assets//3d_1.png';
import vis3 from '../assets//3d_3.png';
import vis4 from '../assets//3d_4.png';
import vis5 from '../assets//3d_5.png';
import tree from '../assets/3d_2.png';

import arrow from '../assets/Arrow.png';

import house from '../assets/house.png';
import woman1 from '../assets/bl_woman_1.png';
import woman2 from '../assets/bl_woman_2.png';
import ring1 from '../assets/ring_1.png';
import ring2 from '../assets/ring_2.png';
import parf1 from '../assets/t_ford1.png';
import parf2 from '../assets/t_ford2.png';
import pen1 from '../assets/pen_eye_1.png';
import pen2 from '../assets/pen_eye_2.png';

import ph_emoji from '../assets/photo_emoji.png';
import ph_flash from '../assets/photo_flash.png';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

const Retouching = () => {
  const { t } = useTranslation();

  const OnlyImages = [woman1, woman2, ring1, ring2, parf1, parf2, pen1, pen2];

  const notesArr = [
    {
      name: t('retouche_online'),
      text: t('retouche_onlineText'),
      list: [
        t('retouche_list1'),
        t('retouche_list2'),
        t('retouche_list3'),
        t('retouche_list4'),
        t('retouche_list5'),
        t('retouche_list6'),
        t('retouche_list7'),
      ],
    },
    {
      name: t('retouche_port'),
      text: t('retouche_portText'),
      list: [
        t('retouche_portList1'),
        t('retouche_portList2'),
        t('retouche_portList3'),
        t('retouche_portList4'),
        t('retouche_portList5'),
      ],
    },

    {
      name: t('retouche_correct'),
      text: t('retouche_correctText'),
      list: [
        t('retouche_correctList1'),
        t('retouche_correctList2'),
        t('retouche_correctList3'),
        t('retouche_correctList4'),
        t('retouche_correctList5'),
        t('retouche_correctList6'),
      ],
    },

    {
      name: t('retouche_jewel'),
      text: t('retouche_jewelText'),
      list: [
        t('retouche_jewelList1'),
        t('retouche_jewelList2'),
        t('retouche_jewelList3'),
        t('retouche_jewelList4'),
        t('retouche_jewelList5'),
        t('retouche_jewelList6'),
        t('retouche_jewelList7'),
        t('retouche_jewelList8'),
      ],
    },
  ];

  const headerText = t('retouche_header');
  const sectionTitle = t('retouche_subheader');
  const firstText = t('retouche_firstText');

  // return (
  //   <div>
  //     <ServicePage
  //       headerText={headerText}
  //       sectionTitle={sectionTitle}
  //       firstText={firstText}
  //       notesArr={notesArr}
  //       OnlyImages={OnlyImages}
  //     />
  //   </div>
  // );
  return (
    <div className={styles.wrapper}>
      <img className={styles.ph_emoji} src={ph_emoji} alt="ph_emoji" />
      <img className={styles.ph_flash} src={ph_flash} alt="ph_flash" />

      <h1 className={styles.title} data-heading={headerText}>
        {headerText}
      </h1>
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
          <h4>{sectionTitle}</h4>
          <p>{firstText}</p>
        </article>
        <aside className={styles.info_right}>
          <div>
            <a href="#">{t('servPage_arrow')}</a>
            <img src={arrow} alt="arrow" />
          </div>
          <p>{t('servPage_arrText')}</p>
        </aside>
      </section>
      <section className={styles.cards}>
        {notesArr.map((item) => (
          <div key={item.name} className={styles.card}>
            <span className={styles.card_name}>{item.name}</span>
            {item.image !== undefined && <img className={styles.web_icon} src={item?.image} alt="icon" />}
            <hr />
            <article className={styles.card_text}>{item.text}</article>
            {item.list && (
              <ul className={styles.card_list} /* style={{ marginTop: '20px' }} */>
                {item.list?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
      {/* <article className={styles.article}>{secondText}</article> */}
      <section className={styles.works} /* className={styles.works} */>
        {/* подробный stagesList*/}
        {/* {detailedList.length > 0 && (
          <>
            <h3 className={styles.works_subtitle}>{t('servPage_stages')}</h3>
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
        )} */}

        {/* это статичные фотки */}
        <div className={styles.works_miniWrapper}>
          <h3 className={styles.works_subtitleStatic}>{t('servPage_examples')}</h3>
        </div>
        <div className={styles.works_onlyCarousel}>
          <img src={woman1} alt="image" />
          <img src={woman2} alt="image" />
        </div>
        <div className={styles.works_onlyCarousel}>
          <img src={ring1} alt="image" />
          <img src={ring2} alt="image" />
        </div>
        <div className={styles.works_onlyCarousel}>
          <img className={styles.onlyImage} src={house} alt="image" />
        </div>
        <div className={styles.works_onlyCarousel}>
          <img src={parf1} alt="image" />
          <img src={parf2} alt="image" />
        </div>
        <div className={styles.works_onlyCarousel} style={{ marginBottom: '0' }}>
          <img src={pen1} alt="image" />
          <img src={pen2} alt="image" />
        </div>

        {/* {stagesList.length > 0 && (
          <>
            <h3 className={styles.works_subtitle}>{t('servPage_stages')}</h3>
            <ol className={styles.list}>
              {stagesList.map((item) => (
                <li className={styles.list_item}>
                  <span>{item.count}</span> {item.info}
                </li>
              ))}
            </ol>
          </>
        )} */}
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Retouching;
