import React from "react";
import { isFavourite } from "../../utils/utils";
import CountryCard from "./CountryCard";

function CountriesList({ countries, favourites, indicateFavouriteStarBtn }) {
  return (
    <>
      {countries.map(({ name, flags, cca3, population, region, capital }) => {
        const isFavouriteCountry = isFavourite(cca3, favourites);
        return (
          <CountryCard
            draggable="true"
            key={cca3}
            id={cca3}
            name={name.common}
            flag={flags.svg}
            population={population}
            capital={capital}
            region={region}
            isFavourite={isFavouriteCountry}
            indicateFavouriteStarBtn={indicateFavouriteStarBtn}
            to={`/details/${name.common.toLowerCase()}`}
            sx={{
              pl: { xs: "30px", sm: 0, md: "20px", lg: "20px" },
              pr: { xs: "30px", sm: "10px", md: 0 },
              marginBottom: "20px",
            }}
          ></CountryCard>
        );
      })}
    </>
  );
}

export default CountriesList;
