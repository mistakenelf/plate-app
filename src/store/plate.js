import { writable } from 'svelte/store';

import plateApi from '../api/plate';

export const plates = writable([]);
export const plate = writable({});
export const loadingPlates = writable(true);
export const loadingPlateDetails = writable(true);

export const getPlates = async userId => {
  loadingPlates.set(true);
  const res = await plateApi.readAll(userId);

  plates.set(res);

  loadingPlates.set(false);
};

export const createPlate = async data => {
  await plateApi.create(data);
};

export const getPlate = async id => {
  loadingPlateDetails.set(true);
  const plateDetails = await plateApi.get(id);
  loadingPlateDetails.set(false);

  plate.set(plateDetails);
};

export const deletePlate = async id => {
  loadingPlates.set(true);
  await plateApi.deletePlate(id);
  const res = await plateApi.readAll();
  plates.set(res);
  loadingPlates.set(false);
};
