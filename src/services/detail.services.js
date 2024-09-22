const objectService = require('./object.services')

async function getDetails(req,res) {
    objectID = req.params.objectID;

    try {
        const object = await objectService.getObjectById(objectID)
        res.render('details',{object : object})

    } catch (error) {
        console.error(error);
    throw new Error("Error finding the exhibitions: " + error);
    }
}

module.exports={getDetails}