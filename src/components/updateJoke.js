const updateJoke = (jokeDom, jokeData) => {
    // updating category
    jokeDom.querySelector('.category').innerText = jokeData.category;

    // updating type
    jokeDom.querySelector('.type').innerText =
        jokeData.type === 'twopart' ? 'Two-Part Joke' : 'Single Joke';

    // updating setup
    jokeDom.querySelector('.setup').innerText = jokeData.setup;

    // updating delivery
    jokeDom.querySelector('.delivery').innerText = jokeData.delivery;

    // updating flags
    const flagsList = jokeDom.querySelector('.flags');

    // clear existing flags
    flagsList.innerHTML = '';
    for (const [key, value] of Object.entries(jokeData.flags)) {
        const flagItem = document.createElement('li');
        flagItem.className = value ? 'true' : 'false';
        flagItem.innerText = key + ': ' + value;
        flagsList.appendChild(flagItem);
    }

    // updating language
    jokeDom.querySelector('.lang').innerText = 'Language: ' + jokeData.lang;

    // updating safe
    jokeDom.querySelector('.safe').innerText = 'Safe: ' + jokeData.safe;

    return jokeDom;
};

export default updateJoke;
