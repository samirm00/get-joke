# Get A Joke

> A simple website allows the user to get a joke.

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

> The objective of the project is to practice using get requests and apply separation of concerns.

## Screenshots

![Example screenshot](./assets/screenShot.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

- clone the repo.
- `npm install`

## Code Examples

```js
const getJoke = async () => {
  const url = 'https://v2.jokeapi.dev/joke/Any';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch a joke with status : ${res.status} `);
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export default getJoke;
```

## Features

List of features ready and Todos for future development

-
-
-

To-do list:

-
-

## Status

Project is: _in progress_
