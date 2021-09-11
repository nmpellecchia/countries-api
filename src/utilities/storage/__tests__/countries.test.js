import { getCountries, storeCountries } from '../countries.js';
// mock r
const countries = [
  { name: 'Test_1', capital: 'Capital_1', language: 'Lang_1' },
  { name: 'Test_2', capital: 'Capital_2', language: 'Lang_2' },
  { name: 'Test_3', capital: 'Capital_3', language: 'Lang_3' },
  { name: 'Test_4', capital: 'Capital_4', language: 'Lang_4' },
  { name: 'Test_5', capital: 'Capital_5', language: 'Lang_5' },
  { name: 'Test_6', capital: 'Capital_6', language: 'Lang_6' },
  { name: 'Test_7', capital: 'Capital_7', language: 'Lang_7' },
  { name: 'Test_8', capital: 'Capital_8', language: 'Lang_8' },
  { name: 'Test_9', capital: 'Capital_9', language: 'Lang_9' },
  { name: 'Test_10', capital: 'Capital_10', language: 'Lang_10' },
  { name: 'Test_11', capital: 'Capital_11', language: 'Lang_11' },
  { name: 'Test_12', capital: 'Capital_12', language: 'Lang_12' },
  { name: 'Test_13', capital: 'Capital_13', language: 'Lang_13' },
  { name: 'Test_14', capital: 'Capital_14', language: 'Lang_14' },
  { name: 'Test_15', capital: 'Capital_15', language: 'Lang_15' },
  { name: 'Test_16', capital: 'Capital_16', language: 'Lang_16' },
  { name: 'Test_17', capital: 'Capital_17', language: 'Lang_17' },
  { name: 'Test_18', capital: 'Capital_18', language: 'Lang_18' },
  { name: 'Test_19', capital: 'Capital_19', language: 'Lang_19' },
  { name: 'Test_20', capital: 'Capital_20', language: 'Lang_20' },
  { name: 'Test_21', capital: 'Capital_21', language: 'Lang_21' },
  { name: 'Test_22', capital: 'Capital_22', language: 'Lang_22' },
  { name: 'Test_23', capital: 'Capital_23', language: 'Lang_23' },
  { name: 'Test_24', capital: 'Capital_24', language: 'Lang_24' },
  { name: 'Test_25', capital: 'Capital_25', language: 'Lang_25' },
  { name: 'Test_26', capital: 'Capital_26', language: 'Lang_26' },
  { name: 'Test_27', capital: 'Capital_27', language: 'Lang_27' },
  { name: 'Test_28', capital: 'Capital_28', language: 'Lang_28' },
  { name: 'Test_29', capital: 'Capital_29', language: 'Lang_29' },
  { name: 'Test_30', capital: 'Capital_30', language: 'Lang_30' },
];

// I decided to intercept localStorage calls and mock implementation
// instead of overwriting the normal behaviour to the storage
describe('Storing items', () => {
  let setItemMock /*, getItemMock */;
  /* let mockStorage = {}; */

  beforeAll(() => {
    setItemMock = jest
      .spyOn(global.Storage.prototype, 'setItem')
      .mockImplementation((key, value) => {
        mockStorage[key] = value;
      });

    /* getItemMock = jest
      .spyOn(global.Storage.prototype, 'getItem')
      .mockImplementation(key => {
        mockStorage[key];
      }); */
  });

  /* beforeEach(() => {
    // Reset storage value
    mockStorage = {};
  }); */

  afterAll(() => {
    // Remove everything after the test to avoid problems
    setItemMock.mockRestore();
    /*  getItemMock.mockRestore(); */
  });

  test('Should store at least one item', () => {
    storeCountries(countries);

    expect(setItemMock).toHaveBeenCalledTimes(2);
    expect(setItemMock.mock.calls[0][0]).toBe('countries_1_25');
    expect(setItemMock.mock.calls[0][1]).toBe(
      `[{"name":"Test_1","capital":"Capital_1","language":"Lang_1"},{"name":"Test_2","capital":"Capital_2","language":"Lang_2"},{"name":"Test_3","capital":"Capital_3","language":"Lang_3"},{"name":"Test_4","capital":"Capital_4","language":"Lang_4"},{"name":"Test_5","capital":"Capital_5","language":"Lang_5"},{"name":"Test_6","capital":"Capital_6","language":"Lang_6"},{"name":"Test_7","capital":"Capital_7","language":"Lang_7"},{"name":"Test_8","capital":"Capital_8","language":"Lang_8"},{"name":"Test_9","capital":"Capital_9","language":"Lang_9"},{"name":"Test_10","capital":"Capital_10","language":"Lang_10"},{"name":"Test_11","capital":"Capital_11","language":"Lang_11"},{"name":"Test_12","capital":"Capital_12","language":"Lang_12"},{"name":"Test_13","capital":"Capital_13","language":"Lang_13"},{"name":"Test_14","capital":"Capital_14","language":"Lang_14"},{"name":"Test_15","capital":"Capital_15","language":"Lang_15"},{"name":"Test_16","capital":"Capital_16","language":"Lang_16"},{"name":"Test_17","capital":"Capital_17","language":"Lang_17"},{"name":"Test_18","capital":"Capital_18","language":"Lang_18"},{"name":"Test_19","capital":"Capital_19","language":"Lang_19"},{"name":"Test_20","capital":"Capital_20","language":"Lang_20"},{"name":"Test_21","capital":"Capital_21","language":"Lang_21"},{"name":"Test_22","capital":"Capital_22","language":"Lang_22"},{"name":"Test_23","capital":"Capital_23","language":"Lang_23"},{"name":"Test_24","capital":"Capital_24","language":"Lang_24"},{"name":"Test_25","capital":"Capital_25","language":"Lang_25"}]`
    );
  });
});

describe('Retrieving countries from storage', () => {
  let getItemMock;
  let mockStorage = {
    countries_1_25: [{ name: 'Country_1', language: 'lang_1' }],
  };

  beforeAll(() => {
    getItemMock = jest
      .spyOn(global.Storage.prototype, 'getItem')
      .mockImplementation(key => {
        mockStorage[key];
      });
  });

  /* beforeEach(() => {
    // Reset storage value
    mockStorage = {};
  }); */

  afterAll(() => {
    // Remove everything after the test to avoid problems
    getItemMock.mockRestore();
    JSON.parse.mockRestore();
  });

  test('return countries from the storage', () => {
    JSON.parse = jest.fn().mockImplementationOnce(value => value);
    getCountries(1);
    expect(getItemMock).toHaveBeenCalled();
    expect(getItemMock.mock.calls[0][0]).toBe('countries_1_25');
  });

  test('return error if value is not found', () => {
    JSON.parse = jest.fn().mockImplementationOnce(() => null);
    expect(() => {
      getCountries(1);
    }).toThrow();
  });
});
