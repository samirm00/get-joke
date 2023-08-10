import dom from '../dom.js';
import getJokeHandler from '../handlers/getJokeHandler.js';

const getJokeListener = () => {
    dom.btn.addEventListener('click', getJokeHandler);
};

export default getJokeListener;
