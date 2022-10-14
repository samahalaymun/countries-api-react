import { Box, Grid, MenuItem } from "@mui/material";
import React from "react";
import "../App.css";
import DropDown from "./DropDown";
import InputWithIcon from "./InputWithIcon";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Filter() {
  const [region, setRegion] = useState("");
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const menuItems = [
    "Africa",
    "Americas",
    "Europe",
    "Oceania",
    "Asia",
    "Favourites",
  ];
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
              onChange={() => {}}
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
            onChange={handleChange}
            value={region}
          >
            {menuItems.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </DropDown>
        </Grid>
      </Grid>
    </>
  );
}

export default Filter;
