const objectService = require("./object.services");
const searchService = require("./search.services");

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
          objectsArray.push({
            objectID: object.objectID,
            title: object.title,
            primaryImage: object.primaryImage,
            additionalImages: object.additionalImages,
            culture: object.culture,
            dynasty: object.dynasty,
            objectDate: object.objectDate,
          });
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
