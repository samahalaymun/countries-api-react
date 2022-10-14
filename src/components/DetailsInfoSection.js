import { Grid } from "@mui/material";
import React from "react";
import CountryFlagCard from "./CountryFlagCard"
import CountryInfoCard from "./CountryInfoCard"

function DetailsInfoSection() {
  return (
    <>
      <Grid container columns={12}>
        <Grid item xs={12}  sm={12}  lg={6}  md={12} className="preview-img">
          <CountryFlagCard className="img" flag="https://flagcdn.com/be.svg"></CountryFlagCard>
        </Grid>
        <Grid  item  xs={12} sm={12}  lg={6} md={12}>
          <CountryInfoCard></CountryInfoCard>
        </Grid>
      </Grid>
    </>
  );
}

export default DetailsInfoSection;
