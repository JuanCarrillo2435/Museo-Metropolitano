const {translateText} = require('./translator')

async function translateObject(object) {
    const translatedTitle = await translateText(object.title)
    const translatedCulture = object.culture ? await translateText(object.culture) : 'No disponible'
    const translatedDinasty = object.dynasty ? await translateText(object.dynasty) : 'No disponible';

    return {
            objectID: object.objectID,
            title: translatedTitle,
            primaryImage: object.primaryImage,
            additionalImages: object.additionalImages,
            culture: translatedCulture,
            dynasty: translatedDinasty,
            objectDate: object.objectDate,
    }
}

module.exports={translateObject}