const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

/*
    Write the following tests in tests/1_unit-tests.js:

Translate Mangoes are my favorite fruit. to British English
Translate I ate yogurt for breakfast. to British English
Translate We had a party at my friend's condo. to British English
Translate Can you toss this in the trashcan for me? to British English
Translate The parking lot was full. to British English
Translate Like a high tech Rube Goldberg machine. to British English
Translate To play hooky means to skip class or work. to British English
Translate No Mr. Bond, I expect you to die. to British English
Translate Dr. Grosh will see you now. to British English
Translate Lunch is at 12:15 today. to British English
Translate We watched the footie match for a while. to American English
Translate Paracetamol takes up to an hour to work. to American English
Translate First, caramelise the onions. to American English
Translate I spent the bank holiday at the funfair. to American English
Translate I had a bicky then went to the chippy. to American English
Translate I've just got bits and bobs in my bum bag. to American English
Translate The car boot sale at Boxted Airfield was called off. to American English
Translate Have you met Mrs Kalyani? to American English
Translate Prof Joyner of King's College, London. to American English
Translate Tea time is usually around 4 or 4.30. to American English
Highlight translation in Mangoes are my favorite fruit.
Highlight translation in I ate yogurt for breakfast.
Highlight translation in We watched the footie match for a while.
Highlight translation in Paracetamol takes up to an hour to work.
*/

suite('Unit Tests', () => {
    suite('Translator', () => {
        test('Translate Mangoes are my favorite fruit. to British English', (done) => {
            const translator = new Translator();
            const text = 'Mangoes are my favorite fruit.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
            done();
        })

        test('Translate I ate yogurt for breakfast. to British English', (done) => {
            const translator = new Translator();
            const text = 'I ate yogurt for breakfast.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
            done();
        })

        test('Translate We had a party at my friend\'s condo. to British English', (done) => {
            const translator = new Translator();
            const text = 'We had a party at my friend\'s condo.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
            done();
        })

        test('Translate Can you toss this in the trashcan for me? to British English', (done) => {
            const translator = new Translator();
            const text = 'Can you toss this in the trashcan for me?';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'Can you toss this in the <span class="highlight">bin</span> for me?');
            done();
        })

        test('Translate The parking lot was full. to British English', (done) => {
            const translator = new Translator();
            const text = 'The parking lot was full.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'The <span class="highlight">car park</span> was full.');
            done();
        })

        test('Translate Like a high tech Rube Goldberg machine. to British English', (done) => {
            const translator = new Translator();

            const text = 'Like a high tech Rube Goldberg machine.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
            done();
        })

        test('Translate To play hooky means to skip class or work. to British English', (done) => {
            const translator = new Translator();
            const text = 'To play hooky means to skip class or work.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'To <span class="highlight">bunk off</span> means to skip class or work.');
            done();
        })

        test('Translate No Mr. Bond, I expect you to die. to British English', (done) => {
            const translator = new Translator();
            const text = 'No Mr. Bond, I expect you to die.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
            done();
        })

        test('Translate Dr. Grosh will see you now. to British English', (done) => {
            const translator = new Translator();
            const text = 'Dr. Grosh will see you now.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, '<span class="highlight">Dr</span> Grosh will see you now.');
            done();
        })

        test('Translate Lunch is at 12:15 today. to British English', (done) => {
            const translator = new Translator();
            const text = 'Lunch is at 12:15 today.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'Lunch is at <span class="highlight">12.15</span> today.');
            done();
        })

        test('Translate We watched the footie match for a while. to American English', (done) => {
            const translator = new Translator();
            const text = 'We watched the footie match for a while.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
            done();
        })

        test('Translate Paracetamol takes up to an hour to work. to American English', (done) => {
            const translator = new Translator();
            const text = 'Paracetamol takes up to an hour to work.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
            done();
        })

        test('Translate First, caramelise the onions. to American English', (done) => {
            const translator = new Translator();
            const text = 'First, caramelize the onions.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'First, <span class="highlight">caramelise</span> the onions.');
            done();
        })

        test('Translate I spent the bank holiday at the funfair. to American English', (done) => {
            const translator = new Translator();
            const text = 'I spent the bank holiday at the funfair.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
            done();
        })

        test('Translate I had a bicky then went to the chippy. to American English', (done) => {
            const translator = new Translator();
            const text = 'I had a bicky then went to the chippy.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.');
            done();
        })

        test('Translate I\'ve just got bits and bobs in my bum bag. to American English', (done) => {
            const translator = new Translator();
            const text = 'I\'ve just got bits and bobs in my bum bag.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
            done();
        })

        test('Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
            const translator = new Translator();
            const text = 'The car boot sale at Boxted Airfield was called off.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
            done();
        })

        test('Translate Have you met Mrs Kalyani? to American English', (done) => {
            const translator = new Translator();
            const text = 'Have you met Mrs Kalyani?';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
            done();
        })

        test('Translate Prof Joyner of King\'s College, London. to American English', (done) => {
            const translator = new Translator();
            const text = 'Prof Joyner of King\'s College, London.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
            done();
        })

        test('Translate Tea time is usually around 4 or 4.30. to American English', (done) => {
            const translator = new Translator();
            const text = 'Tea time is usually around 4 or 4.30.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
            done();
        })

        test('Highlight translation in Mangoes are my favorite fruit.', (done) => {
            const translator = new Translator();
            const text = 'Mangoes are my favorite fruit.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
            done();
        })

        test('Highlight translation in I ate yogurt for breakfast.', (done) => {
            const translator = new Translator();
            const text = 'I ate yogurt for breakfast.';
            const locale = 'american-to-british';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
            done();
        })

        test('Highlight translation in We watched the footie match for a while.', (done) => {
            const translator = new Translator();
            const text = 'We watched the footie match for a while.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
            done();
        })

        test('Highlight translation in Paracetamol takes up to an hour to work.', (done) => {
            const translator = new Translator();
            const text = 'Paracetamol takes up to an hour to work.';
            const locale = 'british-to-american';
            const translation = translator.translate(text, locale);
            assert.equal(translation.translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
            done();
        })



    })

})