export const changeCssVariables = (style) => {
  const root = document.querySelector(':root');

  //   root.style.setProperty('--theme-default-popup', `var(--theme-${style}-popup)`);
  //   root.style.setProperty('--theme-default-popupMargin50', `var(--theme-${style}-popupMargin50)`);
  //   root.style.setProperty('--theme-default-popupMargin0', `var(--theme-${style}-popupMargin0)`);

  const cssVariables = ['popup', 'popupMargin50', 'popupMargin0', 'popupJustifyC', 'popupTextAi'];

  cssVariables.forEach((item) => {
    root.style.setProperty(`--theme-default-${item}`, `var(--theme-${style}-${item})`);
  });
};
