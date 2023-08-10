import dom from '../dom.js';
import getJoke from '../../apis/getJoke.js';
import createJoke from '../components/createJoke.js';
import updateJoke from '../components/updateJoke.js';

const getJokeHandler = async () => {
    const data = await getJoke();

    // joke exist on the DOM
    const jokeExist = document.getElementById('joke-container');
    if (!jokeExist) {
        const jokeDom = createJoke(data);
        dom.root.append(jokeDom);
    } else {
        updateJoke(jokeExist, data);
    }
};

export default getJokeHandler;
