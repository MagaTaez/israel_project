import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './Form.module.scss';

const FormTab1 = () => {
  const [formStatus, setFormStatus] = useState('');

  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      budget: '',
      terms: '',
      text: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Minimum 2 characters'),
      email: Yup.string().email('Invalid email address'),
      number: Yup.number(),
      budget: Yup.string(),
      terms: Yup.string(),
      text: Yup.string().min(5, 'Minimum 5 characters'),
    }),

    // onSubmit: (values) => console.log(values),
  });

  // onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  // onSubmit:     "https://formsubmit.co/your@email.com" method="POST",

  // onSubmit: (values) => {
  //   console.log('submit', values);
  //   alert('Thank you for the submission. Korionna will be in contact with you shortly');
  //   resetForm();
  // },

  return (
    <form /* className={styles.form} */ onSubmit={formik.handleSubmit}>
      {/* <h3 className={styles.title}>{t('form_name')}</h3>

      <div className={styles.formHeader}>
        <p>Project start</p>
        <p>Get on the team</p>
        <p>Cooperation</p>
      </div> */}

      <div className={styles.input__wrapper}>
        <div className={styles.input__element}>
          <input
            className={styles.input}
            name="name"
            required
            placeholder={t('form_name1')}
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? <div className={styles.error}>{formik.errors.name}</div> : null}
        </div>
        <div className={styles.input__element}>
          <input
            className={styles.input}
            name="email"
            required
            placeholder={t('form_email')}
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.input__element}>
          <input
            className={styles.input}
            name="number"
            required
            placeholder={t('form_number')}
            type="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.number && formik.touched.number ? (
            <div className={styles.error}>{formik.errors.number}</div>
          ) : null}
        </div>
      </div>

      <div className={styles.select__wrapper}>
        <div>
          <label htmlFor="budget">{t('form_budget')}</label>
          <select
            name="budget"
            id="budget"
            value={formik.values.budget}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
            <option value="" disabled="disabled">
              {t('form_budget_select')}
            </option>
            <option value={t('form_budget_big')}>{t('form_budget_big')}</option>
            <option value={t('form_budget_big1')}>{t('form_budget_big1')}</option>
            <option value={t('form_budget_big2')}>{t('form_budget_big2')}</option>
            <option value={t('form_budget_big3')}>{t('form_budget_big3')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">{t('form_terms')}</label>
          <select
            name="terms"
            id="terms"
            value={formik.values.terms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
            <option value="" disabled="disabled">
              {t('form_terms_select')}
            </option>
            <option value={t('popup_2dan')}>{t('popup_2dan')}</option>
            <option value={t('popup_3dan')}>{t('popup_3dan')}</option>
            <option value={t('popup_3d')}>{t('popup_3d')}</option>
            <option value={t('popup_logos')}>{t('popup_logos')}</option>
            <option value={t('popup_corp')}>{t('popup_corp')}</option>
            <option value={t('popup_photo')}>{t('popup_photo')}</option>
            <option value={t('popup_web')}>{t('popup_web')}</option>
          </select>
        </div>
      </div>
      <div className={styles.textarea__wrapper}>
        <label htmlFor="text">{t('forms_comment')}</label>
        <textarea
          className={styles.textarea}
          name="text"
          id="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.text && formik.touched.text ? (
          <div className={styles.errorarea}>{formik.errors.text}</div>
        ) : null}
      </div>
      <div className={styles.button_rapper}>
        <button disabled={formik.isSubmitting} className={styles.button} type="submit">
          {t('forms_button')}
        </button>
        {formStatus === 'success' && <div className={styles.success}>We contact with you soon!</div>}
        {formStatus === 'failure' && <div className={styles.failure}>Something wrong, try again Please</div>}
      </div>
    </form>
  );
};

export default FormTab1;
