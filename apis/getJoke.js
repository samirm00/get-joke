const getJoke = async () => {
    const url = 'https://v2.jokeapi.dev/joke/Any';
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(
                `Failed to fetch a joke with status : ${res.status} `,
            );
        }

        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

export default getJoke;
