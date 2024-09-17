const apiURL = `https://collectionapi.metmuseum.org/public/collection/v1/departments`;
async function getAllDepartments() {
  try {
    console.log("Start Department controlers");
    const response = await fetch(apiURL);
    const departments = await response.json();

    console.log(departments);
    return departments;
  } catch (error) {
    console.error(error);
    throw new Error("Error: " + error);
  }
}

module.exports = {
  getAllDepartments,
};
