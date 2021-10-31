import jQuery from 'jquery';
import { getAllCountries, getCountry } from '../countries.js';

const returnValue = {
  country_1: 'c_1',
  country_2: 'c_2',
  country_3: 'c_3',
  country_4: 'c_4',
};

describe('Getting all countries from the API works correctly', () => {
  test('Gets all countries from the API', async () => {
    // mock the get method, for some reason it doesn't work inside beforeAll/Each
    jQuery.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(returnValue));
    // get the value first and then compare it
    const res = await getAllCountries();
    expect(res).toEqual(returnValue);
  });
  test('Fail allCountries API call', async () => {
    jQuery.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error('test error')));

    await expect(getAllCountries()).rejects.toStrictEqual(
      new Error("Couldn't access the service")
    );
  });
});

describe('getting single country from the API', () => {
  test('Fail if no name is passed', () => {
    // use return with .rejects or .resolves with promises, thrown error inside async code
    //converts to promise rejection and is not the same thing
    return expect(getCountry()).rejects.toThrow(
      new Error("A valid country name it's needed")
    );
  });

  test('Get country from the API', async () => {
    const country = 'country_1';
    const mockCountry = returnValue[country];
    jQuery.get = jest.fn().mockImplementationOnce(passedValue => {
      // passedValue = the url, so we need to isolate only what we need for the test
      const val = passedValue.match(country).toString();
      const returnedVal = returnValue[val];

      return Promise.resolve(returnedVal);
    });
    // get the value first and then compare it
    const res = await getCountry('country_1');

    expect(res).toEqual(mockCountry);
  });

  test('Fail  singleCountry API call', async () => {
    jQuery.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error('test error')));

    await expect(getAllCountries()).rejects.toStrictEqual(
      new Error("Couldn't access the service")
    );
  });
});
