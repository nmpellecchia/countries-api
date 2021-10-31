import jQuery from 'jquery';

const URL = 'https://restcountries.eu/rest/v2/';

export async function getAllCountries() {
  try {
    const allCountries = await jQuery.get(`${URL}all`);
    return allCountries;
  } catch (e) {
    throw new Error("Couldn't access the service");
  }
}

export async function getCountry(name) {
  if (name === undefined) {
    throw new Error("A valid country name it's needed");
  }
  try {
    const country = await jQuery.get(`${URL}${name}`, data => {
      console.log(data);
    });
    return country;
  } catch (e) {
    throw new Error("Couldn't access the service");
  }
}
