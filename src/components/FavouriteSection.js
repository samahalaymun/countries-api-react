import { Box, Typography } from "@mui/material";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import "../App.css";
import FavouriteCard from "./FavouriteCard";
function FavouriteSection({ favourites }) {
  console.log(favourites);
  return (
    <Box className="fav-section" sx={{ paddingRight: "30px", pb: 4 }}>
      <Box
        className="section-container"
        sx={{
          height: "calc(100vh - 200px)",
          backgroundColor: "#fff",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
          paddingBottom: "50px",
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "10px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "800",
            fontSize: "20px",
            color: "#111517",
          }}
        >
          Favourites
        </Typography>
        <Box className="favourites-list" sx={{ mt: 3,height:"100%",overflow:"hidden",overflowY:"auto"}}>
          {favourites.map((fav) => {
            return <FavouriteCard favourite={fav}></FavouriteCard>;
          })}
        </Box>
      </Box>
    </Box>
  );
}
export default FavouriteSection;
