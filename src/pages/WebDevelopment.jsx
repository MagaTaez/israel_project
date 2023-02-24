import React from 'react';
import { useTranslation } from 'react-i18next';

import ServicePage from '../components/ServicePage';

import web1 from '../assets/web_1.png';
import web2 from '../assets/web_2.png';
import web3 from '../assets/web_3.png';
import web4 from '../assets/web_4.png';
import web_pic1 from '../assets/web_pic1.png';
import web_pic2 from '../assets/web_pic2.png';
import web_pic3 from '../assets/web_pic3.png';
import web_pic4 from '../assets/web_pic4.png';

const WebDevelopment = () => {
  const { t } = useTranslation();
  const notesArr = [
    {
      name: t('web_noteName1'),
      text: t('web_noteText1'),
      list: [],
      image: web1,
    },
    {
      name: t('web_noteName2'),
      text: t('web_noteText2'),
      list: [],
      image: web2,
    },
    {
      name: t('web_noteName3'),
      text: t('web_noteText3'),
      list: [],
      image: web3,
    },
    {
      name: t('web_noteName4'),
      text: t('web_noteText4'),
      list: [],
      image: web4,
    },
  ];

  const stagesList = [
    {
      count: '1.',
      info: t('web_stage1'),
    },
    {
      count: '2.',
      info: t('web_stage2'),
    },
    {
      count: '3.',
      info: t('web_stage3'),
    },
    {
      count: '4.',
      info: t('web_stage4'),
    },
  ];

  const OnlyImages = [
    { image: web_pic1, link: '/webdevelopment/valkirye' },
    { image: web_pic2, link: '/webdevelopment/murmansk' },
    { image: web_pic3, link: '/webdevelopment/eclipse' },
    { image: web_pic4, link: '/webdevelopment/integrity' },
  ];

  const header = t('web_header');
  const subTitle = t('web_subheader');
  const firstText = t('web_text1');
  const resultText = t('web_text2');
  return (
    <div>
      <ServicePage
        headerText={header}
        sectionTitle={subTitle}
        firstText={firstText}
        notesArr={notesArr}
        stagesList={stagesList}
        resultText={resultText}
        OnlyImages={OnlyImages}
      />
    </div>
  );
};

export default WebDevelopment;
