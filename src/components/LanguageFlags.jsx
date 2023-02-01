import React, { useState, useEffect, useRef } from 'react';
import world from '../assets/world.png';
import { useTranslation } from 'react-i18next';

import russia from '../assets/russia.png';
import uk from '../assets/uk.png';
import israel from '../assets/israel.png';

import styles from './LanguageFlags.module.scss';

const LanguageFlags = () => {
  const [visibleFlags, setVisibleFlags] = useState(false);
  const flagsRef = React.useRef(null);

  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'English',
      flag: uk,
    },
    {
      code: 'he',
      country_code: 'he',
      name: 'עברית',
      flag: israel,
    },
    {
      code: 'ru',
      country_code: 'ru',
      name: 'Русский',
      flag: russia,
    },
  ];

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setVisibleFlags(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (flagsRef.current && !event.composedPath().includes(flagsRef.current)) {
        setVisibleFlags(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  //   const currentLanguageCode = cookies.get('i18next') || 'en'

  return (
    <div ref={flagsRef} className={styles.wrapper}>
      <div className={styles.img_wrapper} onClick={() => setVisibleFlags(!visibleFlags)}>
        <img src={world} alt="world" />
      </div>
      {
        <div
          className={`${styles.flags_wrapper}  ${
            visibleFlags ? styles.active : ''
          }`} /* {cn(styles.flags_wrapper, styles.active)} */
        >
          {languages.map((item) => (
            <li key={item.code} className={styles.icon} onClick={() => changeLanguage(item.code)}>
              <img src={item.flag} alt={item.code} />
            </li>
          ))}
        </div>
      }
    </div>
  );
};

export default LanguageFlags;
