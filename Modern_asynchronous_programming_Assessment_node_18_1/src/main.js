const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

async function update(constellation) {
  try {
    const response = await axios.put(`${BASE_URL}/constellations/${constellation.id}`, constellation);
    return response
  } catch (error) {
    const id = constellation.id;
    return Promise.reject({
      error: `Updating constellation (id: ${id}) failed.`
    });
  }
}

function bulkImport(constellations) {}

module.exports = { bulkImport, update };
