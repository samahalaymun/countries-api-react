import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

function FavouriteCard(props) {
  const deleteFavourite = (e) => {
    console.log(e.target.getAttribute("name"));
  };
  return (
    <Box
      id={props.favourite.cca3}
      sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
    >
      <Box
        className="country-info"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: "40px",
            maxHeight: "30px",
            marginRight: "10px",
            borderRadius: "5px",
          }}
        >
          <Avatar
            alt={props.favourite.name}
            src={props.favourite.flag}
            variant="rounded"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography
          variant="p"
          sx={{
            fontWeight: "800",
            maxWidth: "150px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.favourite.name}
        </Typography>
      </Box>
      <Button onClick={deleteFavourite}>
        <Avatar
          name={props.favourite.cca3}
          sx={{
            color: "#111517",
            width: "25px",
            height: "25px",
            borderRadius: 20,
            backgroundColor: "#ccc",
            fontWeight: "800",
          }}
        >
          &#x2716;
        </Avatar>
      </Button>
    </Box>
  );
}

export default FavouriteCard;
