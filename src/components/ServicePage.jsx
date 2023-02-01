import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './ServicePage.module.scss';

import arrow from '../assets/Arrow.png';
import { useTranslation } from 'react-i18next';
// import cans from '../assets/2_cans.png';
// import cards from '../assets/Gravity-Card.png';
// import design from '../assets/art_design.png';
// import brochures from '../assets/brochures.png';
// import calendar from '../assets/calendar.png';
// import rabbit from '../assets/rabbit.png';

// const notesArr = [
//   {
//     name: 'Company',
//     text: 'We make the company understandable for customers and recognizable in the market. We will fix the current brand or create a new image.',
//   },
//   {
//     name: 'Product',
//     text: 'We develop a logo and style for new products, we help to give new life to old ones.',
//   },
//   {
//     name: 'Employer image',
//     text: 'We help companies attract and retain people with the right skills and values.',
//   },
//   {
//     name: 'Event',
//     text: 'We develop the concept and visual identification for events, work through all the media and help in their production.',
//   },
// ];

// const TopImages = [{ image: cans }, { image: cards }, { image: design }];
// const BottomImages = [{ image: brochures }, { image: calendar }, { image: rabbit }];

const ServicePage = ({
  headerText,
  sectionTitle,
  firstText,
  secondText,
  notesArr,
  TopImages = [],
  BottomImages = [],
  OnlyImages = [],
  stagesList = [],
  resultText = '',
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
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
      <article className={styles.article}>{secondText}</article>
      <section className={styles.works}>
        <h3 className={styles.works_subtitle}>{t('servPage_examples')}</h3>

        {/* это статичные фотки */}
        {OnlyImages.length > 0 && (
          <div className={styles.works_onlyCarousel}>
            {OnlyImages?.map((item) => (
              <div key={item} className={styles.works_cardOnly}>
                <img className={styles.works_imgOnly} src={item} alt="card" />
              </div>
            ))}
          </div>
        )}

        {/* а это динамическая карусель */}
        {TopImages.length > 0 && BottomImages.length > 0 && (
          <div>
            <div className={styles.works_smallWrapper}>
              <div className={cn(styles.works_carousel, styles.animate)}>
                {/* we need to make them twice for correct animation */}

                <div className={styles.works_topCarousel}>
                  {TopImages?.map((item) => (
                    <Link key={item} className={styles.works_card} to={`/logos/${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
                <div className={styles.works_topCarousel}>
                  {TopImages?.map((item) => (
                    <Link key={item} className={styles.works_card} to={`/logos/${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/*  */}
            <div className={styles.works_smallWrapper}>
              <div className={cn(styles.works_carousel, styles.animateRight)}>
                <div className={styles.works_bottomCarousel}>
                  {BottomImages?.map((item) => (
                    <Link key={item.image} className={styles.works_card} to={`/logos/${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
                <div className={styles.works_bottomCarousel}>
                  {BottomImages?.map((item) => (
                    <Link key={item.image} className={styles.works_card} to={`/logos/${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {stagesList.length > 0 && (
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
        )}

        {resultText !== '' && (
          <>
            <h3 className={styles.works_subtitle}>{t('servPage_result')}</h3>
            <article className={styles.article}>{resultText}</article>
          </>
        )}
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};
export default ServicePage;
