const createPlate = async data => {
  const res = await fetch('/api/create-plate', {
    body: JSON.stringify(data),
    method: 'POST',
  });

  return await res.json();
};

const getMyPlates = async id => {
  const res = await fetch('/api/my-plates', {
    body: JSON.stringify(id),
    method: 'POST',
  });

  const myPlatesArray = await res.json();

  return myPlatesArray.object.data;
};

const getSharedplates = async id => {
  const res = await fetch('/api/shared-plates', {
    body: JSON.stringify(id),
    method: 'POST',
  });

  const sharedPlatesArray = await res.json();

  return sharedPlatesArray.object.data;
};

const getPlateDetails = async id => {
  const res = await fetch('/api/plate-details', {
    body: JSON.stringify(id),
    method: 'POST',
  });

  return await res.json();
};

const deletePlate = async id => {
  const res = await fetch('/api/delete-plate', {
    body: JSON.stringify(id),
    method: 'DELETE',
  });

  return await res.json();
};

const updatePlate = async data => {
  const res = await fetch('/api/update-plate', {
    body: JSON.stringify(data),
    method: 'POST',
  });

  return await res.json();
};

export default {
  createPlate,
  getMyPlates,
  getPlateDetails,
  deletePlate,
  updatePlate,
  getSharedplates,
};
