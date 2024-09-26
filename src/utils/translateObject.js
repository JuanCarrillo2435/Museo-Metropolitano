const {translateText} = require('./translator')

async function translateObject(object) {
    const translatedCulture = object.culture ? await translateText(object.culture) : 'No disponible'
    const translatedDinasty = object.dynasty ? await translateText(object.dynasty) : 'No disponible';
    const translatedTitle = object.title  ? await translateText(object.title) : 'Titulo No disponible';

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