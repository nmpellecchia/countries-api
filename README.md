## About this project

My goal was to create a complete and responsive React app that allows to search and display basic information about any country in the world.
I made it using create-react-app, React Router 5.3.0, Bootstrap 5.1.0 and JQuery 3.6.0.

## Code examples

- A somewhat complex logic inside the app. Used to display the countries.

```javascript
useEffect(() => {
  let allCountries;
  let items = [];
  props.currentPage === 1
    ? (allCountries = getCountries(parseInt(props.currentPage)))
    : // countries are stored 1_25; 26_50 etc. This formula gives the correct numbers to get from the storage
      // E.g.: x(offset)*y(pageNumber)+1 ::: 25*2+1 = 51
      (allCountries = getCountries(
        PAGE_OFFSET * parseInt(props.currentPage) + 1
      ));
  // get the countries divided in the amount I want
  while (allCountries.length) {
    items.push(allCountries.splice(0, amountPerRow));
  }
  setSlicedCountries(items);
}, [props.currentPage]);
```

- Dynamic code to get whatever key is necessary

```javascript
const exp = `countries_${offset}_${offset + MAX_COUNTRIES - 1}`;
const allCountries = JSON.parse(localStorage.getItem(exp));

// Check if the key doesn't exist
if (allCountries === null) {
  throw new Error('Countries not found inside local storage');
}
```

- Simple mock test using Jest

```javascript
test('Fail allCountries API call', async () => {
  jQuery.get = jest
    .fn()
    .mockImplementationOnce(() => Promise.reject(new Error('test error')));

  await expect(getAllCountries()).rejects.toStrictEqual(
    new Error("Couldn't access the service")
  );
});
```

## Why I built it like this

- One of my purposes in this project was to learn and practice React Hooks. So I did not use libraries like Redux to manage my states.

- Bootstrap is an amazing framework for styling components in an easy and responsive manner. And it even has a version exclusive to React, with many amazing components

- I wrote my tests using Jest. A framework that already comes with create-react-app. It's syntax is simple enough that even a beginner can use it, wich I think is great.

- The API used is [REST COUNTRIES](https://restcountries.com/). The version at the time of making this project is 3.1. Wich changed several things in respect to the previous version. [**Example request**](https://restcountries.com/v3.1/name/peru)

## Possible future changes

If I have time in the future, I would like to:

- Display the countries alphabetically
- More personalized style
- Search country function
- Add more tests

## Setup

If you want to run this project, clone the source or download the .zip and open with your code editor.

Install the project dependencies:

```
npm install
```

Start the app:

```
npm start
```
