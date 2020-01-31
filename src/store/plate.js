import { writable, get } from 'svelte/store';

import plateApi from '../api/plate';
import { getId } from '../helpers/getId';

export const plates = writable([]);
export const plate = writable(null);
export const loadingPlates = writable(true);
export const loadingPlateDetails = writable(true);

const getPlates = async userId => {
  loadingPlates.set(true);
  const res = await plateApi.getPlates(userId);
  plates.set(res);
  loadingPlates.set(false);
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
  plates.update(allPlates => allPlates.filter(res => getId(res) !== id));
  await plateApi.deletePlate(id);
};

const updatePlate = async data => {
  await plateApi.updatePlate(data);
};

const search = (searchText, myPlates) => {
  plates.set(
    myPlates.filter(
      plate =>
        plate.data.title.toLowerCase().includes(searchText.toLowerCase()) ||
        plate.data.status.toLowerCase().includes(searchText.toLowerCase()),
    ),
  );
};

export default {
  getPlates,
  createPlate,
  getPlate,
  deletePlate,
  updatePlate,
  search,
};
