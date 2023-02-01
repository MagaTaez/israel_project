import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import App from './App';

//Localisaton
i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'ru', 'he'],
    // whiteList: ['en', 'ru', 'he'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'],
    },
    // backend: {
    //   loadPath: '/locales/{{lng}}/translation.json',
    // },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
);
