const createPlate = async data => {
  const res = await fetch('/api/create-plate', {
    body: JSON.stringify(data),
    method: 'POST',
  });

  return await res.json();
};

const getMyPlates = async id => {
  const res = await fetch('/api/plates', {
    body: JSON.stringify(id),
    method: 'POST',
  });

  return await res.json();
};

const getSharedplates = async id => {
  const res = await fetch('/api/shared-plates', {
    body: JSON.stringify(id),
    method: 'POST',
  });

  return await res.json();
};

const getPlate = async id => {
  const res = await fetch('/api/plate', {
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
  getPlate,
  deletePlate,
  updatePlate,
  getSharedplates,
};
