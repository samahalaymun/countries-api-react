import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getBorderName } from "../../services/detailsServices";
import ImageCard from "../common/ImageCard";
import CountryInfoCard from "./CountryInfoCard";

function DetailsInfoSection({ details }) {
  const [bordersNames, setBordersNames] = useState([]);
  const {
    currencies,
    languages,
    borders,
    capital,
    name,
    population,
    flags,
    region,
    subregion,
    tld,
  } = details;
  let nativeName = Object.values(name.nativeName)[0].official;
  let currenciesString = Object.values(currencies)
    .map((item) => item.name)
    .toString();
  let languageString = Object.values(languages).toString();

  useEffect(() => {
    let bordersArr = [];
    if (borders) {
      bordersArr = borders.map((border) => {
        return getBorderName(border);
      });
      Promise.all(bordersArr).then((data) => {
        setBordersNames(data);
      });
    }
  }, [borders]);
  return (
    <>
      <Grid container columns={12}>
        <Grid item xs={12} sm={12} lg={6} md={12} className="preview-img">
          <ImageCard className="img" flag={flags.svg} />
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={12}>
          <CountryInfoCard
            currencies={currenciesString}
            languages={languageString}
            borders={bordersNames}
            capital={capital}
            name={name}
            population={population}
            region={region}
            subregion={subregion}
            tld={tld}
            nativeName={nativeName}
          ></CountryInfoCard>
        </Grid>
      </Grid>
    </>
  );
}

export default DetailsInfoSection;
