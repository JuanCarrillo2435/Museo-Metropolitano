const {translateTextESEN} = require('../utils/translatorES_EN')


const apiURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search";

const searchExhibition = async (q, departmentId, geoLocation) => {
  geoLocation = geoLocation.charAt(0).toUpperCase() + geoLocation.slice(1).toLowerCase();
  try {
    let url = `${apiURL}?q=${encodeURIComponent(await translateTextESEN(q))}`;

    if (departmentId !== "") {
      url += `&departmentId=${departmentId}`;
    }

    if (geoLocation !== "") {
      url += `&geoLocation=${encodeURIComponent(geoLocation)}`;
    }
      console.log("🚀 ~ searchExhibition ~ url:", url)
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error searching object Id's: " + error);
  }
};

module.exports = {
  searchExhibition,
};
