/**
 * @jest-environment jsdom
 */

import createJoke from './createJoke.js';
import updateJoke from './updateJoke.js';

describe('updateJoke function', () => {
    const initialJokeData = {
        category: 'Animal',
        type: 'twopart',
        setup: 'Why did the chicken cross the road?',
        delivery: 'To get to the other side!',
        flags: { nsfw: false, racist: false, sexist: false },
        lang: 'en',
        safe: true,
        id: '1234',
    };

    const updatedJokeData = {
        category: 'Tech',
        type: 'single',
        setup: 'Why do programmers prefer dark mode?',
        delivery: 'Because the light attracts bugs!',
        flags: { nsfw: false, racist: false, sexist: true },
        lang: 'es',
        safe: false,
        id: '5678',
    };

    let jokeDom;

    beforeEach(() => {
        jokeDom = createJoke(initialJokeData);
        updateJoke(jokeDom, updatedJokeData);
    });

    test('should update the category correctly', () => {
        expect(jokeDom.querySelector('.category').innerText).toEqual(
            updatedJokeData.category,
        );
    });

    test('should update the type correctly', () => {
        expect(jokeDom.querySelector('.type').innerText).toEqual('Single Joke');
    });

    test('should update the setup and delivery correctly', () => {
        expect(jokeDom.querySelector('.setup').innerText).toEqual(
            updatedJokeData.setup,
        );
        expect(jokeDom.querySelector('.delivery').innerText).toEqual(
            updatedJokeData.delivery,
        );
    });

    test('should update the flags correctly', () => {
        const flagsList = jokeDom.querySelector('.flags');
        const flagItems = flagsList.querySelectorAll('li');

        const flagsArray = Array.from(flagItems);

        flagsArray.forEach((flagItem, index) => {
            const [key, value] = Object.entries(updatedJokeData.flags)[index];
            expect(flagItem.innerText).toEqual(key + ': ' + value);
        });
    });

    test('should update language and safety correctly', () => {
        expect(jokeDom.querySelector('.lang').innerText).toEqual(
            `Language: ${updatedJokeData.lang}`,
        );
        expect(jokeDom.querySelector('.safe').innerText).toEqual(
            `Safe: ${updatedJokeData.safe}`,
        );
    });
});
