import { Grid } from "@mui/material";
import { Box, padding } from "@mui/system";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import FavouriteSection from "./FavouriteSection";
import Spinner from "./Spinner";

function Countries() {
  const [countries,setCountries]=useState([])
  useEffect(()=>{
  const fetchData = async () => {
    const data = await fetch('https://restcountries.com/v3.1/all');
    const json = await data.json();
    setCountries(json);
  }

  fetchData()
    .catch(console.error);;
  },[])
  const favourites = [
    {
      name: "Iceland",
      flag: "https://flagcdn.com/is.svg",
      cca3: "352",
    },
    {
      name: "America",
      flag: "https://flagcdn.com/us.svg",
      cca3: "352",
    },
    {
      name: "Germany",
      flag: "https://flagcdn.com/de.svg",
      cca3: "352",
    },
  ];

  return (
    <>
      <Grid container sx={{ pb: 5, mt: {xs: 4, sm: 4, md:4,lg:4} }} columns={12}>
        <Grid item lg={3} md={4} className="fav-section" sx={{paddingTop:1}}>
          <FavouriteSection favourites={favourites}></FavouriteSection>
        </Grid>
        <Grid item xs={12} sm={12} lg={9} md={8} >
          <Box
            className="countries"
            sx={{
              height: {md:"calc(100vh - 200px)"},
              overflow: "hidden",
              overflowY: "auto",
              marginRight: "10px",
              paddingTop:1
            }}
          >
            <Grid container spacing={{xs:3,sm:8,md:5,lg:5}}  columns={12} >
            {
               countries.length > 0 ?(
                countries.map((country) => {
                  return <CountryCard country={country}></CountryCard>;
                   })
               ):( <Spinner></Spinner>)
            }
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Countries;
