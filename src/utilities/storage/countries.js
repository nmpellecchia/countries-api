const MAX_COUNTRIES = 25;

export function storeCountries(allCountries) {
  const countriesChunks = sliceCountries(allCountries);

  //////////////////////////////
  ////// Code commented for testing purposes
  /////////////////////////////
  let offset = 0;
  /*  console.log(allCountries); */
  for (let i = 0; i < countriesChunks.length; i++) {
    // dynamically mark wich countries are inside setting the offsets.
    let newOffset = offset + countriesChunks[i].length;
    localStorage.setItem(
      `countries_${offset + 1}_${newOffset}`,
      JSON.stringify(countriesChunks[i])
    );
    offset = newOffset;
  }
}

function sliceCountries(allCountries) {
  let countriesChunks = [];
  // To avoid storing an unnecessarily long object, divide it into manageable parts

  while (allCountries.length) {
    countriesChunks.push(allCountries.splice(0, MAX_COUNTRIES));
  }
  return countriesChunks;
}

export function getAllCountries() {
  /* const regEx = /countries_\d+_\d+/gim;
  const allCountries = [];

  if (localStorage.getItem('test_name').match(regEx)) {
    allCountries.push(JSON.parse(localStorage.getItem('test_name')));
  }

  const allCountries = JSON.parse(localStorage.getItem('test_name'));
  // Check if the key doesn't exist
  if (allCountries === null) {
    throw new Error('Countries not found inside local storage');
  }
  return allCountries; */
  throw new Error('xd');
}
