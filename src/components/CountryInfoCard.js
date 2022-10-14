import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import CardContentItem from "./CardContentItem";


function CountryInfoCard() {
  return (
    <Box className="preview-details">
      <Grid container>
        <CardContentItem value="Belgium" variant="h1" className="title"></CardContentItem>
      </Grid>
      <Grid container className="preview-info">
        <Grid item xs={12} sm={6} md={6} lg={6} className="left">
          <CardContentItem
          variant="body2"
            className="item-info"
            label="Population:"
            value="Königreich Belgien"
          ></CardContentItem>
          <CardContentItem
            variant="body2"
            className="item-info"
            label="Region:"
            value="Europe"
          ></CardContentItem>

          <CardContentItem
            variant="body2"
            className="item-info"
            label="Sub Region:"
            value="Western Europe"
          ></CardContentItem>
           <CardContentItem
            variant="body2"
            className="item-info"
            label="Capital:"
            value="Brussels"
          ></CardContentItem>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className="right">
        <CardContentItem
          variant="body2"
            className="item-info"
            label="Top Level Domain:"
            value=".be"
          ></CardContentItem>
          <CardContentItem
            variant="body2"
            className="item-info"
            label="Currencies:"
            value="Euro"
          ></CardContentItem>
           <CardContentItem
            variant="body2"
            className="item-info"
            label="Languages:"
            value=" German,French,Dutch"
          ></CardContentItem>
        </Grid>
      </Grid>
      <Grid container>
        <Box className="country-borders">
          <span>Border Countries:</span>
          <Box className="borders" id="borders">
            <Link to="/details/ISL" className="border">
              Netherlands
            </Link>
            <Link to="/details/ISL" className="border">
              France
            </Link>
            <Link to="/details/ISL" className="border">
              Germany
            </Link>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default CountryInfoCard;
