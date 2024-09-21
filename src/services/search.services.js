const apiURL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search";

const searchExhibition = async (q, departmentId, geoLocation) => {
  try {
    let url = `${apiURL}?q=${encodeURIComponent(q)}`;

    if (departmentId !== "") {
      url += `&departmentId=${departmentId}`;
    }

    if (geoLocation !== "") {
      url += `&geoLocation=${encodeURIComponent(geoLocation)}`;
    }
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
