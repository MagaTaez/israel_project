import React from 'react';
import ServicePage from '../components/ServicePage';

import african from '../assets/african.png';
import house from '../assets/house.png';
import parfume from '../assets/parfume.png';

const notesArr = [
  {
    name: 'Retouching for online stores and catalogs',
    text: 'Operational study and retouching of any quantity photos for the online store catalog',
    list: [
      '* Color correction',
      '* Background cleaning, clipping',
      '* Removal of acne, bruises and other imperfections in the photo',
      '* Removal of product defects',
      '* Deep skin smoothing',
      '* Working with shadows',
      '* High level plastic',
    ],
  },
  {
    name: 'Portrait retouching ',
    text: 'Handling portrait shots for deletion obvious defects. This retouching includes:',
    list: [
      '* Color correction',
      '* Plastic',
      '* Removal of acne, bruises and other imperfections in the photo',
      '* Background cleaning, clipping if necessary',
      '* Skin smoothing',
    ],
  },

  {
    name: 'Batch color correction',
    text: 'Bringing a series of images to a single standard. Includes:',
    list: ['* White balance', '* HSL', '* Light correction', '* Contrast', '* Crop', '* Saturation', '* Brushes'],
  },

  {
    name: 'Jewelry retouching',
    text: 'Development of retouching standards individually for your requirements and retouching photographs of jewelry with preparation for printing catalog and online store',
    list: [
      '* Color correction',
      '* Removing extra glare and reflections',
      '* Clipping background',
      '* Alignment of depth and contrast of reflections, shadows and highlights',
      '* Cleaning of parasitic shades on metals and stones',
      '* Setting a single tilt angle and position in the frame',
      '* Drawing the cut of stones and highlights on them',
      '* Drawing a drop shadow in a single format',
    ],
  },
];

const OnlyImages = [african, house, parfume];

const Retouching = () => {
  const headerText = 'Photo retouching';
  const sectionTitle = 'Why do you need retouching?';
  const firstText =
    'Photo retouching allows you to remove various defects visible in the photo and make the photo deeper, richer and more beautiful. Most often, retouching is used in portrait photography - for close-up portraits, when shooting objects for catalogs and advertising, as well as in any other advertising photography. Regardless of the quality of the source material (and the quality of the organization and conduct of photography), photo retouching is an obligatory stage in the production of photographic products.';
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
