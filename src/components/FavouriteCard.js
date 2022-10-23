import { Box } from "@mui/material";
import React from "react";
import ButtonWithIcon from "./common/ButtonWithIcon";
import ClearIcon from "@mui/icons-material/Clear";
import CardContentItem from "./common/CardContentItem";
import ImageCard from "./common/ImageCard";

function FavouriteCard({ name, flag, cca3, className, handleDeleteFav }, key) {
  return (
    <Box
      id={cca3}
      sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}
      key={key}
    >
      <Box className={className}>
        <ImageCard flag={flag} alt={name} className="fav-country-flag" />
        <CardContentItem value={name} variant="p" />
      </Box>
      <ButtonWithIcon
        name={cca3}
        className="delete-fav-btn"
        onClick={(event) => {
          event.preventDefault();
          handleDeleteFav(cca3);
        }}
        label="&times;"
      ></ButtonWithIcon>
    </Box>
  );
}

export default FavouriteCard;
