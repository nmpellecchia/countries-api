import {
  getCountries as getCountriesStorage,
  storeCountries,
} from '../storage/countries.js';
import { getAllCountries as getAllCountriesApi } from '../api/countries.js';

export async function getAllCountries() {
  /* Get them from the storage if possible */
  try {
    console.log('Countries from local storage!');
    return getCountriesStorage(1);
  } catch (e) {
    console.log('Countries from API!');
    const allCountries = await getAllCountriesApi();
    storeCountries(allCountries);
    return allCountries;
  }
}
