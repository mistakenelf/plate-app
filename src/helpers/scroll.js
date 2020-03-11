export const freezeScroll = () => {
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
};

export const unfreezeScroll = () => {
  document.body.style.position = '';
  document.body.style.top = '';
};
