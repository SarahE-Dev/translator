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
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        translation = translation.replace(regex, value);
        });
    
        Object.entries(titles).forEach(([key, value]) => {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        translation = translation.replace(regex, value.charAt(0).toUpperCase() + value.slice(1));
        });
    
        const timeRegex = /(\d{1,2}):(\d{2})/g;
        translation = translation.replace(timeRegex, (match, p1, p2) => {
        return `${p1}.${p2}`;
        });
    
        return translation === text ? { text, translation: 'Everything looks good to me!' } : { text, translation };
    }
}

module.exports = Translator;