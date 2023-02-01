import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

import styles from './Form.module.scss';

const Form = () => {
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

    onSubmit: (values, actions) => {
      try {
        emailjs.send('service_lrjl91k', 'template_2td209s', values, 'ZQ1RHMPm_vSnxaIJP').then(() => {
          console.log('email sent', values);
          actions.setSubmitting(false);
          setFormStatus('success');

          setTimeout(() => {
            actions.resetForm();
            setFormStatus('');
          }, 4000);
        });
      } catch (error) {
        console.log(error);
        setFormStatus('failure');
        setTimeout(() => {
          setFormStatus('');
        }, 4000);
      }
    },

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
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h3 className={styles.title}>{t('form_name')}</h3>

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
            <option value={t('form_budget_small')}>{t('form_budget_small')}</option>
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
            <option value="Up to 14 days">{t('form_terms_big')}</option>
            <option value="Up to 7 days">{t('form_terms_small')}</option>
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

export default Form;

// import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
//
//

//
//
// const MyTextInput = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//       <>
//         <label htmlFor={props.name}>{label}</label>
//         <input {...field} {...props} />
//         {meta.touched && meta.error ? (
//           <div className="error">{meta.error}</div>
//         ) : null}
//       </>
//     );
// };

// const MyCheckbox = ({ children, ...props }) => {
//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//       <>
//         <label className="checkbox">
//             <input type="checkbox" {...field} {...props} />
//             {children}
//         </label>
//         {meta.touched && meta.error ? (
//           <div className="error">{meta.error}</div>
//         ) : null}
//       </>
//     );
//   };

// const CustomForm = () => {

//     return (
//         <Formik
//         initialValues = {{
//             name: '',
//             email: '',
//             amount: 0,
//             currency: '',
//             text: '',
//             terms: false
//         }}
//         validationSchema = {Yup.object({
//             name: Yup.string()
//                     .min(2, 'Минимум 2 символа для заполнения')
//                     .required('Обязательное поле!'),
//             email: Yup.string()
//                     .email('Неправильный email адрес')
//                     .required('Обязательное поле!'),
//             amount: Yup.number()
//                     .required('Сумма обязательна')
//                     .min(5, 'Не менее 5'),
//             currency: Yup.string().required('Выберите валюту'),
//             text: Yup.string()
//                     .min(10, 'Не менее 10 символов'),
//             terms: Yup.boolean()
//                     .required('Необходимо согласие')
//                     .oneOf([true], "Необходимо согласие")
//         })}
//         onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
//         >
//             <Form className="form">
//                 <h2>Отправить пожертвование</h2>
//                 <MyTextInput
//                     label="Ваше имя"
//                     id="name"
//                     name="name"
//                     type="text"
//                     autoComplete="off"
//                 />
//                 <MyTextInput
//                     label="Ваша почта"
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="off"
//                 />
//                 <label htmlFor="amount">Количество</label>
//                 <Field
//                     id="amount"
//                     name="amount"
//                     type="number"
//                     autoComplete="off"
//                 />
//                 <ErrorMessage component="div" className="error" name="amount"/>
//                 <label htmlFor="currency">Валюта</label>
//                 <Field
//                     id="currency"
//                     name="currency"
//                     as="select"
//                     >
//                         <option value="">Выберите валюту</option>
//                         <option value="USD">USD</option>
//                         <option value="UAH">UAH</option>
//                         <option value="RUB">RUB</option>
//                 </Field>
//                 <ErrorMessage component="div" className="error" name="currency"/>
//                 <label htmlFor="text">Ваше сообщение</label>
//                 <Field
//                     id="text"
//                     name="text"
//                     as="textarea"
//                 />
//                 <ErrorMessage component="div" className="error" name="text"/>
//                 <MyCheckbox name="terms">
//                     Соглашаетесь с политикой конфиденциальности?
//                 </MyCheckbox>
//                 <button type="submit">Отправить</button>
//             </Form>
//         </Formik>
//     )
// }

// export default CustomForm;
