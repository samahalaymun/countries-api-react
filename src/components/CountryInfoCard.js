import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function CountryInfoCard() {
  return (
    <Box className="preview-details">
      <Grid container>
        <Typography
          variant="h1"
          sx={{ fontSize: "35px", fontWeight: "800", mb: "30px" }}
        >
          Belgium
        </Typography>
      </Grid>
      <Grid container className="preview-info">
        <Grid item xs={12} sm={6} md={6} lg={6} className="left">
          <Box className="item-info">
            <span>
              <strong>Native Name:</strong> Königreich Belgien
            </span>
          </Box>
          <Box className="item-info">
            <span>
              <strong>Population:</strong> 11,555,9975
            </span>
          </Box>
          <Box className="item-info">
            <span>
              <strong>Region:</strong> Europe
            </span>
          </Box>
          <Box className="item-info">
            <span>
              <strong>Sub Region:</strong> Western  Europe
            </span>
          </Box>
          <Box className="item-info">
            <span>
              <strong>Capital:</strong> Brussels
            </span>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className="right">
          <Box className="item-info">
            <span>
              <strong>Top Level Domain:</strong> .be
            </span>
          </Box>
          <Box className="item-info">
            <span>
              <strong>Currencies:</strong> Euro
            </span>
          </Box>
          <Box className="item-info">
            <span>
              <strong>Languages:</strong> German,French,Dutch
            </span>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Box className="country-borders" >
          <span>Border Countries:</span>
          <Box className="borders" id="borders">
            <Link to='/details/ISL' className="border">Netherlands</Link>
            <Link to='/details/ISL' className="border">France</Link>
            <Link to='/details/ISL' className="border">Germany</Link>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default CountryInfoCard;
