const apiURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`;

async function getObjectById(objectId) {
  try {
    const response = await fetch(apiURL + objectId);
    const object = await response.json();

    return object
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching the object: " + error);
  }
}

module.exports= {getObjectById}
