import React from 'react';
import ServicePage from '../components/ServicePage';
import { useTranslation } from 'react-i18next';

import dtop1 from '../assets//3dtop1.png';
import dtop2 from '../assets/3dtop2.png';
import dtop3 from '../assets/3dtop3.png';
import dbot1 from '../assets/3dbot1.png';
import dbot2 from '../assets/3dbot2.png';

import vis3 from '../assets//3d_3.png';
import vis4 from '../assets//3d_4.png';
import vis5 from '../assets//3d_5.png';

const Visualisation3D = () => {
  const { t } = useTranslation();

  const notesArr = [
    {
      name: t('vis_textHeader'),
      // eslint-disable-next-line no-multi-str
      text: t('vis_firstText'),
      list: [],
    },
  ];

  const detailedList = [
    {
      count: '1.',
      info: t('vis_stagesName1'),
      text: t('vis_stagesText1'),
      image: vis3,
    },
    {
      count: '2.',
      info: t('vis_stagesName2'),
      text: t('vis_stagesText2'),
      image: vis4,
    },
    {
      count: '3.',
      info: t('vis_stagesName3'),
      text: t('vis_stagesText3'),
      image: vis5,
    },
  ];

  const TopImages = [
    { url: dtop1, name: '/3dvisualization/interior' },
    { url: dtop2, name: '/3dvisualization/architecture' },
    { url: dtop3, name: '/3dvisualization/exterior' },
  ];
  const BottomImages = [
    { url: dbot1, name: '/3dvisualization/park' },
    { url: dbot2, name: '/3dvisualization/artobject' },
  ];

  const header = t('vis_mainHeader');
  const subTitle = t('vis_mainSubHeader');
  const resultText = t('vis_resultText');

  const stylesFor3d = true;
  return (
    <div>
      <ServicePage
        headerText={header}
        sectionTitle={subTitle}
        notesArr={notesArr}
        detailedList={detailedList}
        TopImages={TopImages}
        BottomImages={BottomImages}
        resultText={resultText}
        stylesFor3d={stylesFor3d}
      />
    </div>
  );
};

export default Visualisation3D;
