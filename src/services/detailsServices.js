import { searchApi, fetchAPI, searchByAlphaApi } from "../utils/utils";

export async function getCountryDetails(countryname) {
    let url = `${searchApi}${countryname}`;
    try { 
    const countryObject = await fetchAPI(url);
    if (countryObject) {
      return countryObject[0];
    } else {
      throw "somthing went wrong";
    }
  } catch (error) {
   console.log(error)
  }
  }
  
  export async function getBorderName(border) {
    try {
      const response = await fetch(`${searchByAlphaApi}${border}`);
      if (response.status === 200) {
        const borderCountry = await response.json();
        return borderCountry[0].name.common;
      }
    } catch (error) {
      
    }
    }