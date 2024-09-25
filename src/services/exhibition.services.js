const { translateText } = require("../utils/translator");
const objectService = require("./object.services");
const searchService = require("./search.services");
const {translateObject} = require('../utils/translateObject')

async function getExhibitions(q, departmentId, geoLocation, page) {
  const pageNumber = parseInt(page);
  try {
    let objectsArray = [];
    const results = await searchService.searchExhibition(
      q,
      departmentId,
      geoLocation
    );

    if (results.total > 0) {
      let i = 0;
      for await (const objectId of results.objectIDs) {
        if (i >= 20 * pageNumber && i < 20 * (pageNumber + 1)) {
          const object = await objectService.getObjectById(objectId);
          objectsArray.push(
            await translateObject(object)
          );
        }
        i++;
      }
    }
    return {
      results: objectsArray,
      totalPages :Math.ceil(results.total / 20)
    };
    
  } catch (error) {
    console.error(error);
    throw new Error("Error finding the exhibitions: " + error);
  }
}

module.exports = { getExhibitions };
