/**
 * @jest-environment jsdom
 */

import createJoke from './createJoke.js';

describe('createJoke function', () => {
    const jokeData = {
        category: 'Animal',
        type: 'twopart',
        setup: 'Why did the chicken cross the road?',
        delivery: 'To get to the other side!',
        flags: { nsfw: false, racist: false, sexist: false },
        lang: 'en',
        safe: true,
        id: '1234',
    };
    const container = createJoke(jokeData);

    test('should create container with correct id and className', () => {
        expect(container.id).toEqual('joke-container');
        expect(container.className).toEqual('joke');
    });

    test('should set the category correctly', () => {
        const category = container.querySelector('.category');
        expect(category.id).toEqual(`category-${jokeData.category}`);
        expect(category.innerText).toEqual(jokeData.category);
    });

    test('should set the type correctly', () => {
        const type = container.querySelector('.type');
        expect(type.id).toEqual(`type-${jokeData.type}`);
        expect(type.innerText).toEqual('Two-Part Joke');
    });

    test('should set the setup and delivery correctly', () => {
        const setup = container.querySelector('.setup');
        const delivery = container.querySelector('.delivery');
        expect(setup.innerText).toEqual(jokeData.setup);
        expect(delivery.innerText).toEqual(jokeData.delivery);
    });

    test('should handle flags correctly', () => {
        const flagsList = container.querySelector('.flags');
        const flagItems = flagsList.querySelectorAll('li');

        const flagsArray = Array.from(flagItems);

        flagsArray.forEach((flagItem, index) => {
            const [key, value] = Object.entries(jokeData.flags)[index];
            expect(flagItem.innerText).toEqual(key + ': ' + value);
        });
    });

    test('should set language and safety correctly', () => {
        const lang = container.querySelector('.lang');
        const safe = container.querySelector('.safe');
        expect(lang.innerText).toEqual(`Language: ${jokeData.lang}`);
        expect(safe.innerText).toEqual(`Safe: ${jokeData.safe}`);
    });
});
