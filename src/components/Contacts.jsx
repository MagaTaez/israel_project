import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.scss';
const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.form__wrapper}>
      <div className={styles.form__element}>
        <h4 className={styles.form__contact}>{t('form_contact')}</h4>
        <div className={styles.form__discuss}>{t('form_discuss')}</div>
        <div className={styles.form__email}>Jerusalem@mail.ru</div>
        <div className={styles.form__phone}>+7 (932) 213-45-63</div>
        <div className={styles.form__coop}>{t('form_cooperation')}</div>
        <div className={styles.form__email}>Jerusalem@mail.ru</div>
      </div>
      <div className={styles.form__bottom}></div>
    </div>
  );
};

export default Contacts;
