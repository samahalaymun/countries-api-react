export const allCountriesApi = "https://restcountries.com/v3.1/all";
export const searchApi = "https://restcountries.com/v3.1/name/";
export const searchByAlphaApi = "https://restcountries.com/v3.1/alpha/";
export const searchByBorders = "https://restcountries.com/v3.1/alpha?codes=";
export const regions = [
  "All",
  "Africa",
  "Americas",
  "Europe",
  "Oceania",
  "Asia",
  "Favourites",
];
export const deboune = (func, delay) => {
  let timeoutid;
  return function (...args) {
    clearTimeout(timeoutid);
    timeoutid = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
export const setTitle = (title) => {
  document.title = title;
};
export function isFavourite(country, favourites) {
  let fav = false;
  for (let i = 0; i < favourites.length; i++) {
    if (favourites[i].cca3 === country) {
      fav = true;
      break;
    }
  }
  return fav;
}

export function applyFilter(region, searchInput, countries, favourites) {
  let filteredCountries = [];
  if (region) {
    if (region.toLowerCase() === "all") {
      filteredCountries = [...countries];
    } else if (region.toLowerCase() === "favourites") {
      filteredCountries = favourites.filter((country) => {
        return country.name.official.toLowerCase().indexOf(searchInput) !== -1;
      });
    } else {
      filteredCountries = countries.filter((country) => {
        if (country.region.toLowerCase() === region.toLowerCase()) {
          return country;
        }
      });
    }
  }
  return filteredCountries;
}



