import { allCountriesApi, fetchAPI, searchApi } from "../utils/utils";


let fetchController;
const cancelRequests = () => {
  fetchController?.abort();
};

export const getAllCountries = async () => {
  try {
    const allCountries = await fetchAPI(allCountriesApi);
    return allCountries;
  } catch (error) {
    console.log(error);
  }
};

export async function onSearchInput(input) {
  try {
    cancelRequests();
    fetchController = new AbortController();
    const url = `${searchApi}${input.toLowerCase()}`;
    const response = await fetch(url, { signal: fetchController.signal });
    if (response.status === 200) {
      const result = await response.json();
      return result;
    } else if (response.status === 404) {
      throw "something went error";
    }
  } catch (error) {
    if (error.name === "AbortError") return;
  }
}

export function applyRegionFilter(region, searchInput, countries, favourites) {
  let filteredCountires = [];
  if (region && countries) {
    countries.forEach((country) => {
      if (region.toLowerCase() === "all") filteredCountires = countries;
      else if (country.region.toLowerCase() === region.toLowerCase()) {
        filteredCountires.push(country);
      } else if (region.toLowerCase() === "favourites") {
        filteredCountires = favourites.filter((item) => {
          return item.name.official.toLowerCase().indexOf(searchInput) !== -1;
        });
      }
    });
    return filteredCountires;
  }
  return countries;
}

export function getFavourites() {
  let favourites = localStorage.getItem("favourites");
  return JSON.parse(favourites);
}
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


