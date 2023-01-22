import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './ServicePage.module.scss';

import arrow from '../assets/Arrow.png';
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

const notesList = [
  { count: '1.', info: 'Creation of a creative concept' },
  { count: '2.', info: 'Logo development' },
  { count: '3.', info: 'Creating key visuals' },
  { count: '4.', info: 'Formation of TOV (tone of voice)' },
  { count: '5.', info: 'Identity of key media' },
  { count: '6.', info: 'Brand book preparation' },
];

// const TopImages = [{ image: cans }, { image: cards }, { image: design }];
// const BottomImages = [{ image: brochures }, { image: calendar }, { image: rabbit }];

const ServicePage = ({
  headerText,
  sectionTitle,
  firstText,
  notesArr,
  TopImages = [],
  BottomImages = [],
  OnlyImages = [],
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{headerText}</h1>
      <div className={styles.service}>
        <span>Service</span>
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
            <a href="#">Submit your application</a>
            <img src={arrow} alt="arrow" />
          </div>
          <p>we will consult for free and show you where to start</p>
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
      <article className={styles.article}>
        "Packaging" and "appearance" of the project is a defining link in the formation of trust among the audience. In
        addition, a well-designed brand sets a single tone for all points of contact, streamlines and simplifies work.
      </article>
      <section className={styles.works}>
        <h3 className={styles.works_subtitle}>Work examples</h3>

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

        <h3 className={styles.works_subtitle}>Stages of work</h3>
        <ol className={styles.list}>
          {notesList.map((item) => (
            <li className={styles.list_item}>
              <span>{item.count}</span> {item.info}
            </li>
          ))}
        </ol>
        <h3 className={styles.works_subtitle}>Result</h3>

        <article className={styles.article}>
          The key result of the work is the emergence of rules according to which the subsequent marketing support of
          the product will be carried out by the internal team and any involved marketing contractors, with an
          understanding of the style and boundaries within which the company's communication with the target audience is
          built.
        </article>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};
export default ServicePage;
