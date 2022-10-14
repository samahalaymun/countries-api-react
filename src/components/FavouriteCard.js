import { Box } from "@mui/material";
import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import ClearIcon from "@mui/icons-material/Clear";
import CardContentItem from "./CardContentItem";
import CountryFlagCard from "./CountryFlagCard";

function FavouriteCard({name,flag,cca3,className}) {

  return (
    <Box
      id={cca3}
      sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}
    >
      <Box className={className}>
        <CountryFlagCard
          flag={flag}
          alt={name}
          className="fav-country-flag"
        />
        <CardContentItem value={name} variant="p" />
      </Box>
      <ButtonWithIcon
        name={cca3}
        className="delete-fav-btn"
        onClick={()=>{}}
      >
        <ClearIcon />
      </ButtonWithIcon>
    </Box>
  );
}

export default FavouriteCard;
