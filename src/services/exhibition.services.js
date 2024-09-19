const objectService = require("./object.services");
const searchService = require("./search.services");

async function getExhibitions(q, departmentId, geoLocation) {
  try {
    let objectsArray = [];
    const results = await searchService.searchExhibition(q,departmentId,geoLocation
    );

    for await (const objectId of results.objectIDs) {
      const object = await objectService.getObjectById(objectId);
      objectsArray.push({
        objectID : object.objectID,
        title : object.title,
        primaryImage : object.primaryImage,
        additionalImages : object.additionalImages,
        culture : object.culture,
        dynasty : object.dynasty,
        objectDate : object.objectDate
      });
    }
    return objectsArray;
  } catch (error) {
    console.error(error);
    throw new Error("Error finding the exhibitions: " + error);
  }
}

module.exports = { getExhibitions };
