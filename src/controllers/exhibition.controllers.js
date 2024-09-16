const apiURL = "https://collectionapi.metmuseum.org/public/collection/v1/departments";
async function getAllExhibitions(req,res) {
  try {
    console.log("intentando hacer request de exibiciones")
    const response = await fetch(apiURL);
    const exhibitions = await response.json();

    console.log(exhibitions);
    res.render('index',{exhibitions})
  } catch (error) {
    console.error(error);
    res.status(500).send("Error:");
  }
}

module.exports={
  getAllExhibitions
}