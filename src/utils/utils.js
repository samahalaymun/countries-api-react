export const allCountriesApi = "https://restcountries.com/v3.1/all";
export const searchApi = "https://restcountries.com/v3.1/name/";
export const searchByAlphaApi = "https://restcountries.com/v3.1/alpha/";
export const regions = [
  "All",
  "Africa",
  "Americas",
  "Europe",
  "Oceania",
  "Asia",
  "Favourites",
];

export async function fetchAPI(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    const result = await response.json();
    return result;
  }
}

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
export function updateLocalStorage(name, item) {
  Array.isArray(item)
    ? localStorage.setItem(name, JSON.stringify(item))
    : localStorage.setItem(name, item);
}