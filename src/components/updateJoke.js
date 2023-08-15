const updateJoke = (jokeDom, jokeData) => {
    // updating category
    jokeDom.querySelector('.category').innerText = jokeData.category;

    // updating type
    jokeDom.querySelector('.type').innerText =
        jokeData.type === 'twopart' ? 'Two-Part Joke' : 'Single Joke';

    if (jokeData.type === 'twopart') {
        // updating setup
        jokeDom.querySelector('.setup').classList.remove('hide');
        jokeDom.querySelector('.setup').innerText = jokeData.setup;

        // updating delivery
        jokeDom.querySelector('.delivery').classList.remove('hide');
        jokeDom.querySelector('.delivery').innerText = jokeData.delivery;
    } else {
        jokeDom.querySelector('.setup').classList.add('hide');
        jokeDom.querySelector('.delivery').classList.add('hide');
    }

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
