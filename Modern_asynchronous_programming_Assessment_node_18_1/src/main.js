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

async function bulkImport(constellations) {
  if (!Array.isArray(constellations)) {
    return Promise.reject({
        error: "Inputted argument must be an array."
    });
  }

  const requests = [];
  for (const constellation of constellations) {
    if (!isValid(constellation)) {
        return Promise.reject({
            error: "All constellations must include relevant fields."
        });
    }
  } // moved requests.push outside of for loop to have it run only if all constellations isValid is true
  for (const constellation of constellations) {
    requests.push(update(constellation));
  }
  return Promise.allSettled(requests);
}

module.exports = { bulkImport, update };
