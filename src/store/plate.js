import { writable } from 'svelte/store';

import plateApi from '../api/plate';

export const plates = writable([]);
export const plate = writable(null);
export const loadingPlates = writable(true);
export const loadingPlateDetails = writable(true);

const getPlates = async userId => {
  loadingPlates.set(true);
  const res = await plateApi.readAll(userId);

  plates.set(res);

  loadingPlates.set(false);
};

const createPlate = async data => {
  const plateData = await plateApi.create(data);
  plate.set(plateData);
};

const getPlate = async id => {
  loadingPlateDetails.set(true);
  const plateDetails = await plateApi.get(id);
  loadingPlateDetails.set(false);

  plate.set(plateDetails);
};

const deletePlate = async (id, userId) => {
  loadingPlates.set(true);
  await plateApi.deletePlate(id);
  const res = await plateApi.readAll(userId);
  plates.set(res);
  loadingPlates.set(false);
};

export default {
  getPlates,
  createPlate,
  getPlate,
  deletePlate,
};
