const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
  try {
    const response = 'put axios.put here'
    return 
  } catch (error) {

    return Promise.reject({
      error: ``
    })
  }
}

function bulkImport(constellations) {}

module.exports = { bulkImport, update };
