const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    suite('Translator', () => {
        test('Required field(s) missing', () => {
        const translator = new Translator();
        const text = '';
        const locale = '';
        const expected = { error: 'No text to translate' };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Invalid value for locale field', () => {
        const translator = new Translator();
        const text = 'Mangoes are my favorite fruit.';
        const locale = 'french-to-english';
        const expected = { error: 'Invalid value for locale field' };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Mangoes are my favorite fruit.', () => {
        const translator = new Translator();
        const text = 'Mangoes are my favorite fruit.';
        const locale = 'american-to-british';
        const expected = {
            text: 'Mangoes are my favorite fruit.',
            translation: 'Mangoes are my favourite fruit.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('I ate yogurt for breakfast.', () => {
        const translator = new Translator();
        const text = 'I ate yogurt for breakfast.';
        const locale = 'american-to-british';
        const expected = {
            text: 'I ate yogurt for breakfast.',
            translation: 'I ate yoghurt for breakfast.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test("We had a party at my friend's condo.", () => {
        const translator = new Translator();
        const text = "We had a party at my friend's condo.";
        const locale = 'american-to-british';
        const expected = {
            text: "We had a party at my friend's condo.",
            translation: "We had a party at my friend's flat."
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Can you toss this in the trashcan for me?', () => {
        const translator = new Translator();
        const text = 'Can you toss this in the trashcan for me?';
        const locale = 'american-to-british';
        const expected = {
            text: 'Can you toss this in the trashcan for me?',
            translation: 'Can you toss this in the bin for me?'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('The parking lot was full.', () => {
        const translator = new Translator();
        const text = 'The parking lot was full.';
        const locale = 'american-to-british';
        const expected = {
            text: 'The parking lot was full.',
            translation: 'The car park was full.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Like a high tech Rube Goldberg machine.', () => {
        const translator = new Translator();
        const text = 'Like a high tech Rube Goldberg machine.';
        const locale = 'american-to-british';
        const expected = {
            text: 'Like a high tech Rube Goldberg machine.',
            translation: 'Like a high tech Heath Robinson device.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('To play hooky means to skip class or work.', () => {
        const translator = new Translator();
        const text = 'To play hooky means to skip class or work.';
        const locale = 'american-to-british';
        const expected = {
            text: 'To play hooky means to skip class or work.',
            translation: 'To bunk off means to skip class or work.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('No Mr. Bond, I expect you to die.', () => {
        const translator = new Translator();
        const text = 'No Mr. Bond, I expect you to die.';
        const locale = 'american-to-british';
        const expected = {
            text: 'No Mr. Bond, I expect you to die.',  
            translation: 'No Mr Bond, I expect you to die.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Dr. Grosh will see you now.', () => {
        const translator = new Translator();
        const text = 'Dr. Grosh will see you now.';
        const locale = 'american-to-british';
            
        const expected = {
            text: 'Dr. Grosh will see you now.',
            translation: 'Dr Grosh will see you now.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Lunch is at 12:15 today.', () => {
        const translator = new Translator();
        const text = 'Lunch is at 12:15 today.';
        const locale = 'american-to-british';
        const expected = {
            text: 'Lunch is at 12:15 today.',
            translation: 'Lunch is at 12.15 today.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('We watched the footie match for a while.', () => {
        const translator = new Translator();
        const text = 'We watched the footie match for a while.';
        const locale = 'british-to-american';
        const expected = {
            text: 'We watched the footie match for a while.',
            translation: 'We watched the soccer match for a while.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Paracetamol takes up to an hour to work.', () => {
        const translator = new Translator();
        const text = 'Paracetamol takes up to an hour to work.';
        const locale = 'british-to-american';
        const expected = {
            text: 'Paracetamol takes up to an hour to work.',
            translation: 'Tylenol takes up to an hour to work.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('First, caramelise the onions.', () => {
        const translator = new Translator();
        const text = 'First, caramelise the onions.';
        const locale = 'british-to-american';
        const expected = {
            text: 'First, caramelise the onions.',
            translation: 'First, caramelize the onions.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('I spent the bank holiday at the funfair.', () => {
        const translator = new Translator();
        const text = 'I spent the bank holiday at the funfair.';
        const locale = 'british-to-american';
        const expected = {
            text: 'I spent the bank holiday at the funfair.',
            translation: 'I spent the public holiday at the carnival.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('I had a bicky then went to the chippy.', () => {
        const translator = new Translator();
        const text = 'I had a bicky then went to the chippy.';
        const locale = 'british-to-american';
        const expected = {
            text: 'I had a bicky then went to the chippy.',
            translation: 'I had a cookie then went to the fish-and-chip shop.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('I\'ve just got bits and bobs in my bum bag.', () => {
        const translator = new Translator();
        const text = 'I\'ve just got bits and bobs in my bum bag.';
        const locale = 'british-to-american';
        const expected = {
            text: 'I\'ve just got bits and bobs in my bum bag.',
            translation: 'I\'ve just got odds and ends in my fanny pack.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('The car boot sale at Boxted Airfield was called off.', () => {
        const translator = new Translator();
        const text = 'The car boot sale at Boxted Airfield was called off.';
        const locale = 'british-to-american';
        const expected = {
            text: 'The car boot sale at Boxted Airfield was called off.',
            translation: 'The swap meet at Boxted Airfield was called off.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Have you met Mrs Kalyani?', () => {
        const translator = new Translator();
        const text = 'Have you met Mrs Kalyani?';
        const locale = 'british-to-american';
        const expected = {
            text: 'Have you met Mrs Kalyani?',
            translation: 'Have you met Mrs. Kalyani?'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Prof Joyner of King\'s College, London.', () => {
        const translator = new Translator();
        const text = 'Prof Joyner of King\'s College, London.';
        const locale = 'british-to-american';
        const expected = {
            text: 'Prof Joyner of King\'s College, London.',
            translation: 'Prof. Joyner of King\'s College, London.'
        };
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
        test('Tea time is usually around 4 or 4.30.', () => {
        const translator = new Translator();
        const text = 'Tea time is usually around 4 or 4.30.';
        const locale = 'british-to-american';
        const expected = {
            text: 'Tea time is usually around 4 or 4.30.',
            translation: 'Tea time is usually around 4 or 4:30.'
        };  
        assert
            .deepEqual(translator.translate(text, locale), expected);
        }
        );
    }
    );
});
