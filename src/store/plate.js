import { writable } from 'svelte/store';

import { getId } from '../helpers/getId';
import plateApi from '../api/plate';

export const plates = writable([]);

export const getPlates = async () => {
  const res = await plateApi.readAll();

  plates.set(res);
};

export const createPlate = async data => {
  await plateApi.create(data);
};

export const getPlate = async id => {
  return await plateApi.get(id);
};

export const deletePlate = async id => {
  await plateApi.deletePlate(id);
  const res = await plateApi.readAll();
  plates.set(res);
};
