const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    constructor() {
        this.americanOnly = americanOnly;
        this.americanToBritishSpelling = americanToBritishSpelling;
        this.americanToBritishTitles = americanToBritishTitles;
        this.britishOnly = britishOnly;
    }

    returnTranslation(translation) {
        return '<span class="highlight">' + translation + '</span>';

    }
    
    translate(text, locale) {
        if(text == ""){
            return { error: 'No text to translate' };
        }
        if (!text || !locale) {
        return { error: 'Required field(s) missing' };
        }
    
        let translation = text;
        
        let dictionary = {};
        let titles = this.americanToBritishTitles;
    
        if (locale === 'american-to-british') {
        dictionary = { ...this.americanOnly, ...this.americanToBritishSpelling };
        } else if (locale === 'british-to-american') {
        dictionary = { ...this.britishOnly, ...this.americanToBritishSpelling };
        titles = Object.entries(titles).reduce((acc, [key, value]) => {
            acc[value] = key;
            return acc;
        }, {});
        } else {
        return { error: 'Invalid value for locale field' };
        }
    
        Object.entries(dictionary).forEach(([key, value]) => {
        let replacement = this.returnTranslation(value);
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        translation = translation.replace(regex, replacement);
        
        });
    
        Object.entries(titles).forEach(([key, value]) => {
        let replacement = this.returnTranslation(value);
        const regex = new RegExp(key, 'gi');
        translation = translation.replace(regex, replacement);
        });
        let timeRegex;
        locale === 'american-to-british' ? timeRegex = /(\d{1,2}):(\d{2})/g : timeRegex = /(\d{1,2}).(\d{2})/g
        translation = translation.replace(timeRegex, (match, p1, p2) => {
            let replaceT;
            locale === 'american-to-british' ? replaceT = `${p1}.${p2}` : replaceT = `${p1}:${p2}`
            return this.returnTranslation(replaceT);
        });
    
        return translation.length === text.length ? { text, translation: 'Everything looks good to me!' } : { text, translation };
    }
}

module.exports = Translator;