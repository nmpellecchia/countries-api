import {
  getAllCountries as getAllCountriesStorage,
  storeCountries,
} from '../storage/countries.js';
import { getAllCountries as getAllCountriesApi } from '../api/countries.js';

export async function getAllCountries() {
  /* Get them from the storage if possible */
  try {
    console.log('Countries from local storage!');
    return getAllCountriesStorage();
  } catch (e) {
    console.log('Countries from API!');
    const allCountries = await getAllCountriesApi();
    console.log('Countries from API!');
    storeCountries(allCountries);
    return allCountries;
  }
}
