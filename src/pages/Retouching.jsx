import React from 'react';
import ServicePage from '../components/ServicePage';

import african from '../assets/african.png';
import house from '../assets/house.png';
import parfume from '../assets/parfume.png';
import { useTranslation } from 'react-i18next';

const OnlyImages = [african, house, parfume];

const Retouching = () => {
  const { t } = useTranslation();

  const notesArr = [
    {
      name: t('retouche_online'),
      text: t('retouche_onlineText'),
      list: [
        t('retouche_list1'),
        t('retouche_list2'),
        t('retouche_list3'),
        t('retouche_list4'),
        t('retouche_list5'),
        t('retouche_list6'),
        t('retouche_list7'),
      ],
    },
    {
      name: t('retouche_port'),
      text: t('retouche_portText'),
      list: [
        t('retouche_portList1'),
        t('retouche_portList2'),
        t('retouche_portList3'),
        t('retouche_portList4'),
        t('retouche_portList5'),
      ],
    },

    {
      name: t('retouche_correct'),
      text: t('retouche_correctText'),
      list: [
        t('retouche_correctList1'),
        t('retouche_correctList2'),
        t('retouche_correctList3'),
        t('retouche_correctList4'),
        t('retouche_correctList5'),
        t('retouche_correctList6'),
      ],
    },

    {
      name: t('retouche_jewel'),
      text: t('retouche_jewelText'),
      list: [
        t('retouche_jewelList1'),
        t('retouche_jewelList2'),
        t('retouche_jewelList3'),
        t('retouche_jewelList4'),
        t('retouche_jewelList5'),
        t('retouche_jewelList6'),
        t('retouche_jewelList7'),
        t('retouche_jewelList8'),
      ],
    },
  ];

  const headerText = t('retouche_header');
  const sectionTitle = t('retouche_subheader');
  const firstText = t('retouche_firstText');

  return (
    <div>
      <ServicePage
        headerText={headerText}
        sectionTitle={sectionTitle}
        firstText={firstText}
        notesArr={notesArr}
        OnlyImages={OnlyImages}
      />
    </div>
  );
};

export default Retouching;
