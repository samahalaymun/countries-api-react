import { Box, Grid, MenuItem } from "@mui/material";
import React from "react";
import "../App.css";
import DropDown from "./common/DropDown";
import InputWithIcon from "./common/InputWithIcon";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {regions} from "../utils/utils"
function Filter({handleSearchInput,handleRegionFilter,region}) {
  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className="filter"
        rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
      >
        <Grid item md={8} sm={8} xs={12}>
          <Box
            sx={{ display: "flex", alignItems: "center", maxWidth: "470px" }}
          >
            <InputWithIcon
              type="text"
              placeHolder="Search for a country..."
              onChange={handleSearchInput}
              className="form-control"
            >
              <SearchIcon className="search-icon" />
            </InputWithIcon>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          sm={4}
          xs={12}
          justify="flex-end"
          className="regionFilter"
        >
          <DropDown
            label="Filter By"
            className="dropDown"
            id="region-filter"
            selectId="select-region-filter"
            minWidth={200}
            onChange={handleRegionFilter}
            value={region}
          >
            {regions.map((item) => {
              return <MenuItem value={item} key={item}>{item}</MenuItem>;
            })}
          </DropDown>
        </Grid>
      </Grid>
    </>
  );
}

export default Filter;
