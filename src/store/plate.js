import { writable } from 'svelte/store';

import plateApi from '../api/plate';
import { getId } from '../helpers/getId';

export const myPlates = writable([]);
export const loadingMyPlates = writable(true);

export const sharedPlates = writable([]);
export const loadingSharedPlates = writable(true);

export const plate = writable(null);
export const loadingPlateDetails = writable(true);

const getMyPlates = async userId => {
  loadingMyPlates.set(true);
  const res = await plateApi.getMyPlates(userId);
  myPlates.set(res);
  loadingMyPlates.set(false);
};

const getSharedPlates = async userId => {
  loadingSharedPlates.set(true);
  const res = await plateApi.getSharedplates(userId);
  sharedPlates.set(res);
  loadingSharedPlates.set(false);
};

const createPlate = async data => {
  const plateData = await plateApi.createPlate(data);
  plate.set(plateData);

  return plateData;
};

const getPlateDetails = async id => {
  loadingPlateDetails.set(true);
  const plateDetails = await plateApi.getPlateDetails(id);
  plate.set(plateDetails);
  loadingPlateDetails.set(false);
};

const deletePlate = async id => {
  myPlates.update(allPlates =>
    allPlates.filter(res => getId(res.object) !== id),
  );
  await plateApi.deletePlate(id);
};

const updatePlate = async data => {
  plate.update(res => ({
    ...res,
    data: {
      ...res.data,
      ...data,
    },
  }));

  await plateApi.updatePlate(data);
};

const sharePlate = async data => {
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
  getPlateDetails,
  deletePlate,
  updatePlate,
  searchMyPlates,
  getSharedPlates,
  searchSharedPlates,
  sharePlate,
};
