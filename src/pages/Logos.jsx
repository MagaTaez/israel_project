import React from 'react';
import { Link } from 'react-router-dom';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Logos.module.scss';
import ServicePage from '../components/ServicePage';

import arrow from '../assets/Arrow.png';
import cans from '../assets/2_cans.png';
import cards from '../assets/Gravity-Card.png';
import design from '../assets/art_design.png';
import brochures from '../assets/brochures.png';
import calendar from '../assets/calendar.png';
import rabbit from '../assets/rabbit.png';

const notesArr = [
  {
    name: 'Company',
    text: 'We make the company understandable for customers and recognizable in the market. We will fix the current brand or create a new image.',
  },
  {
    name: 'Product',
    text: 'We develop a logo and style for new products, we help to give new life to old ones.',
  },
  {
    name: 'Employer image',
    text: 'We help companies attract and retain people with the right skills and values.',
  },
  {
    name: 'Event',
    text: 'We develop the concept and visual identification for events, work through all the media and help in their production.',
  },
];

// const OnlyImages = [african, house, parfume];

// const notesList = [
//   { count: '1.', info: 'Creation of a creative concept' },
//   { count: '2.', info: 'Logo development' },
//   { count: '3.', info: 'Creating key visuals' },
//   { count: '4.', info: 'Formation of TOV (tone of voice)' },
//   { count: '5.', info: 'Identity of key media' },
//   { count: '6.', info: 'Brand book preparation' },
// ];

const TopImages = [
  { url: cans, name: 'cans' },
  { url: cards, name: 'videomaker' },
  { url: design, name: 'design' },
];
const BottomImages = [
  { url: brochures, name: 'brochures' },
  { url: calendar, name: 'calendar' },
  { url: rabbit, name: 'rabbit' },
];

const Logos = () => {
  const headerText = 'Logos and corporate identity';
  const sectionTitle =
    'The agency includes a team specializing in branding: the development of logos, identities and corporate identity media.';
  const firstText =
    'Design development for us is not only creating beautiful packaging for your products, but also increasing the efficiency of improving business efficiency.';

  return (
    <div>
      <ServicePage
        headerText={headerText}
        sectionTitle={sectionTitle}
        firstText={firstText}
        notesArr={notesArr}
        TopImages={TopImages}
        BottomImages={BottomImages}
      />
    </div>
  );
};

// const Logos = () => {
//   return (
//     <div className={styles.wrapper}>
//       <h1 className={styles.title}>Logos and corporate identity</h1>
//       <div className={styles.service}>
//         <span>Service</span>
//         <div className={styles.dots_wrapper}>
//           <div className={styles.dots_long}></div>
//           <div className={styles.dots_short}></div>
//           <div className={styles.dots_short}></div>
//           <div className={styles.dots_short}></div>
//           <div className={styles.dots_short}></div>
//         </div>
//       </div>
//       <hr />
//       <section className={styles.info}>
//         <article className={styles.info_left}>
//           <h4>
//             The agency includes a team specializing in branding: the development of logos, identities and corporate
//             identity media.
//           </h4>
//           <p>We help businesses change, new brands launch on the market, and well-known brands launch new products.</p>
//         </article>
//         <aside className={styles.info_right}>
//           <div>
//             <a href="#">Submit your application</a>
//             <img src={arrow} alt="arrow" />
//           </div>
//           <p>we will consult for free and show you where to start</p>
//         </aside>
//       </section>
//       <section className={styles.cards}>
//         {notesArr.map((item) => (
//           <div key={item.name} className={styles.card}>
//             <span className={styles.card_name}>{item.name}</span>
//             <hr />
//             <article className={styles.card_text}>{item.text}</article>
//           </div>
//         ))}
//       </section>
//       <article className={styles.article}>
//         "Packaging" and "appearance" of the project is a defining link in the formation of trust among the audience. In
//         addition, a well-designed brand sets a single tone for all points of contact, streamlines and simplifies work.
//       </article>
//       <section className={styles.works}>
//         <h3 className={styles.works_subtitle}>Work examples</h3>

//         <div className={styles.works_carousel}>
//           <div className={styles.works_topCarousel}>
//             {TopImages.map((item) => (
//               <Link key={item.image} className={styles.works_card} to="#">
//                 <img className={styles.works_card_img} src={item.image} alt="card" />
//                 <p className={styles.works_card_case}>Case</p>
//               </Link>
//             ))}
//           </div>
//           <div className={styles.works_bottomCarousel}>
//             {BottomImages.map((item) => (
//               <Link key={item.image} className={styles.works_card} to="#">
//                 <img className={styles.works_card_img} src={item.image} alt="card" />
//                 <p className={styles.works_card_case}>Case</p>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <h3 className={styles.works_subtitle}>Stages of work</h3>
//         <ol className={styles.list}>
//           {notesList.map((item) => (
//             <li className={styles.list_item}>
//               <span>{item.count}</span> {item.info}
//             </li>
//           ))}
//         </ol>
//         <h3 className={styles.works_subtitle}>Result</h3>

//         <article className={styles.article}>
//           The key result of the work is the emergence of rules according to which the subsequent marketing support of
//           the product will be carried out by the internal team and any involved marketing contractors, with an
//           understanding of the style and boundaries within which the company's communication with the target audience is
//           built.
//         </article>
//       </section>
//       <div className={styles.form}>
//         <Form />
//         <Contacts />
//       </div>
//     </div>
//   );
// };

export default Logos;
