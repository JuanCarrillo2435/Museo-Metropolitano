const translate = require('node-google-translate-skidz');
const LANGUAGE = 'es';

function translateText(text) {
    return new Promise((resolve, reject) => {
      translate({
        text: text,
        source: 'auto',
        target: LANGUAGE
      }, function (result) {
        resolve(result.translation);
      });
    });
}

module.exports={translateText}