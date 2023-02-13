import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './ServicePage.module.scss';

import arrow from '../assets/Arrow.png';
import { useTranslation } from 'react-i18next';

import painting from '../assets/logos_paint.png';
import marker from '../assets/logos_marker.png';
import book from '../assets/logos_book.png';
import paints from '../assets/logos_painter.png';
import ph_emoji from '../assets/photo_emoji.png';
import ph_flash from '../assets/photo_flash.png';
import keyboard from '../assets/dev_keyboard.png';
import screen from '../assets/dev_screen.png';
import vis1 from '../assets//3d_1.png';
import vis2 from '../assets//3d_2.png';

import pointer from '../assets/pointer.png';

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
  firstText = '',
  secondText,
  notesArr,
  TopImages = [],
  BottomImages = [],
  OnlyImages = [],
  stagesList = [],
  detailedList = [],
  resultText = '',
  stylesFor3d = false,
}) => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // в зависимости от адреса возвращает новую страницу
  const imagesSwitcher = () => {
    switch (location.pathname) {
      case '/logos':
        return (
          <>
            <img className={styles.painting} src={painting} alt="painting" />
            <img className={styles.marker} src={marker} alt="marker" />
            <img className={styles.book} src={book} alt="book" />
            <img className={styles.paints} src={paints} alt="paints" />
          </>
        );
      case '/webdevelopment':
        return (
          <>
            <img className={styles.book} src={screen} alt="screen" />
          </>
        );
      case '/retouching':
        return (
          <>
            <img className={styles.ph_emoji} src={ph_emoji} alt="ph_emoji" />
            <img className={styles.ph_flash} src={ph_flash} alt="ph_flash" />
          </>
        );
      // case '/3dvisualization':
      //   return (
      //     <>
      //       <img className={styles.vis1} src={vis1} alt="vis1" />
      //     </>
      //   );
      default:
        return <></>;
    }
  };

  return (
    <div className={styles.wrapper}>
      {location.pathname == '/retouching' && (
        <>
          <img className={styles.ph_emoji} src={ph_emoji} alt="ph_emoji" />
          <img className={styles.ph_flash} src={ph_flash} alt="ph_flash" />
        </>
      )}
      {location.pathname == '/3dvisualization' && (
        <>
          <img className={styles.vis1} src={vis1} alt="vis1" />
        </>
      )}
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
        <aside className={`${styles.info_right} ${stylesFor3d === true ? styles.info_right3d : ''}`}>
          <div>
            <a href="#">{t('servPage_arrow')}</a>
            <img src={arrow} alt="arrow" />
          </div>
          <p>{t('servPage_arrText')}</p>
        </aside>
      </section>
      <section className={styles.cards}>
        {location.pathname == '/logos' && (
          <>
            <img className={styles.painting} src={painting} alt="painting" />
            <img className={styles.marker} src={marker} alt="marker" />
            <img className={styles.book} src={book} alt="book" />
            <img className={styles.paints} src={paints} alt="paints" />
          </>
        )}

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
      <article className={styles.article}>{secondText}</article>
      <section
        className={`${styles.works} ${stylesFor3d === true ? styles.works3d : ''}`} /* className={styles.works} */
      >
        {/* обычный  stagesList*/}
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
        <img src="" alt="" />
        {/* подробный stagesList*/}
        {detailedList.length > 0 && (
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
        )}

        {OnlyImages.length > 0 ||
          (TopImages.length > 0 && (
            <div className={styles.works_miniWrapper}>
              <h3 className={styles.works_subtitle}>{t('servPage_examples')}</h3>{' '}
              <img className={styles.works_image} src={pointer} alt="pointer" />
            </div>
          ))}
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
            <div
              /* className={`${styles.works_smallWrapper} ${stylesFor3d === true ? styles.works_smallWrapper3d : ''}`} */
              className={styles.works_smallWrapper}>
              <div /* className={cn(styles.works_carousel, styles.animate)} */
                className={`${styles.works_carousel} ${styles.animate} ${
                  stylesFor3d === true ? cn(styles.works_carousel3d, styles.animate3d) : ''
                }`}>
                {/* we need to make them twice for correct animation */}

                <div
                  className={`${styles.works_topCarousel} ${
                    stylesFor3d === true ? styles.works_topCarousel3d : ''
                  }`} /* className={styles.works_topCarousel} */
                >
                  {TopImages?.map((item) => (
                    <Link
                      key={item}
                      className={`${styles.works_card} ${stylesFor3d === true ? styles.works_card3d : ''}`}
                      to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
                <div className={styles.works_topCarousel}>
                  {TopImages?.map((item) => (
                    <Link
                      key={item}
                      className={`${styles.works_card} ${stylesFor3d === true ? styles.works_card3d : ''}`}
                      to={`${item.name}`}>
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
                    <Link
                      key={item.image}
                      className={`${styles.works_card} ${stylesFor3d === true ? styles.works_card3d : ''}`}
                      to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
                <div className={styles.works_bottomCarousel}>
                  {BottomImages?.map((item) => (
                    <Link
                      key={item.image}
                      className={`${styles.works_card} ${stylesFor3d === true ? styles.works_card3d : ''}`}
                      to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
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
        {resultText !== '' && (
          <>
            <h3 className={styles.works_subtitle}>{t('servPage_result')}</h3>
            <article className={styles.article}>{resultText}</article>
            {location.pathname == '/webdevelopment' && (
              <>
                <img className={styles.keyboard} src={keyboard} alt="keyboard" />
              </>
            )}
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
