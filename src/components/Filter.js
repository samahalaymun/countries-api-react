import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import "../App.css";
import DropDown from "./DropDown";
import SearchBox from "./SearchBox";
function Filter() {
  return (
    <>
      <Grid container justify="space-between" alignItems="center"className="filter" 
        rowSpacing={{ xs: 5, sm: 5, md:5,lg:5,xl:5 }}>
        <Grid item md={8} sm={8} xs={12} >
         <SearchBox placeholder="Search for a country..."/>
        </Grid>
        <Grid item md={4} sm={4} xs={12} justify="flex-end"className="regionFilter">
          <DropDown/>
        </Grid>
      </Grid>
      
    </>
  );
}

export default Filter;
