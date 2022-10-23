import { Box, Grid } from "@mui/material";
import React from "react";
import "../../App.css";
import CardContentItem from "../common/CardContentItem";
import CountryBorders from "./CountryBorders";
import CountryDetailsContentItem from "./CountryDetailsContentItem";

function CountryInfoCard(props) {
  return (
    <Box className="preview-details">
      <Grid container>
        <CardContentItem
          value={props.name.common}
          variant="h1"
          className="title"
        ></CardContentItem>
      </Grid>
      <Grid container className="preview-info">
        <Grid item xs={12} sm={6} md={6} lg={6} className="left">
          <CountryDetailsContentItem
            label="Native Name"
            value={props.nativeName}
          />
          <CountryDetailsContentItem
            label="Population"
            value={props.population.toLocaleString("en-US")}
          />
          <CountryDetailsContentItem label="Region" value={props.region} />
          <CountryDetailsContentItem
            label="Sub Region"
            value={props.subregion}
          />
          <CountryDetailsContentItem label="Capital" value={props.capital} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className="right">
          <CountryDetailsContentItem
            label="Top Level Domain"
            value={props.tld && props.tld[0]}
          />
          <CountryDetailsContentItem
            label="Currencies"
            value={props.currenciesString}
          />
          <CountryDetailsContentItem
            label="Languages"
            value={props.languageString}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Box className="country-borders">
          <span>Border Countries:</span>
          {props.borders && <CountryBorders borders={props.borders} />}
        </Box>
      </Grid>
    </Box>
  );
}

export default CountryInfoCard;
