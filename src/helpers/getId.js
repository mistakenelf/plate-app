export const getId = item => {
  if (!item.ref) {
    return null;
  }

  return item.ref['@ref'].id;
};
