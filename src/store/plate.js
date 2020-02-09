import { writable } from 'svelte/store';

import plateApi from '../api/plate';
import { getId } from '../helpers/getId';

export const myPlates = writable([]);
export const sharedPlates = writable([]);
export const plate = writable(null);
export const loadingMyPlates = writable(true);
export const loadingSharedPlates = writable(true);
export const loadingPlateDetails = writable(true);

const getMyPlates = async userId => {
  loadingMyPlates.set(true);
  const res = await plateApi.getMyPlates(userId);
  myPlates.set(res);
  loadingMyPlates.set(false);
};

const getSharedPlates = async userId => {
  loadingSharedPlates.set(true);
  const res = await plateApi.getMyPlates(userId);
  sharedPlates.set(res);
  loadingSharedPlates.set(false);
};

const createPlate = async data => {
  const plateData = await plateApi.createPlate(data);
  plate.set(plateData);

  return plateData;
};

const getPlate = async id => {
  loadingPlateDetails.set(true);
  const plateDetails = await plateApi.getPlate(id);
  loadingPlateDetails.set(false);
  plate.set(plateDetails);
};

const deletePlate = async id => {
  myPlates.update(allPlates => allPlates.filter(res => getId(res) !== id));
  await plateApi.deletePlate(id);
};

const updatePlate = async data => {
  await plateApi.updatePlate(data);
};

const searchMyPlates = (searchText, allMyPlates) => {
  myPlates.set(
    allMyPlates.filter(
      plate =>
        plate.data.title.toLowerCase().includes(searchText.toLowerCase()) ||
        plate.data.status.toLowerCase().includes(searchText.toLowerCase()),
    ),
  );
};

const searchSharedPlates = (searchText, allSharedPlates) => {
  sharedPlates.set(
    allSharedPlates.filter(
      plate =>
        plate.data.title.toLowerCase().includes(searchText.toLowerCase()) ||
        plate.data.status.toLowerCase().includes(searchText.toLowerCase()),
    ),
  );
};

export default {
  getMyPlates,
  createPlate,
  getPlate,
  deletePlate,
  updatePlate,
  searchMyPlates,
  getSharedPlates,
  searchSharedPlates,
};
