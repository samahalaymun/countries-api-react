import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Star from "@mui/icons-material/Star";
import CardContentItem from "../common/CardContentItem";
import ButtonWithIcon from "../common/ButtonWithIcon";
import "../../App.css";
import CountryCardContentItem from "./CountryCardContentItem";

function CountryCard(props, key) {
  const dragStart = (e) => {
    e.dataTransfer.setData("card-id", props.id);
    e.target.style.opacity = 0.5;
  };
  const dragEnd = (e) => {
    e.target.style.opacity = 1;
  };
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Box
        sx={props.sx}
        key={key}
        draggable={props.draggable}
        id={props.id}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
      >
        <Link to={props.to}>
          <Card className="country-card">
            <CardMedia
              component="img"
              alt={props.flag}
              height="160"
              image={props.flag}
            />
            <CardContent className="country-card-content">
              <CardContentItem value={props.name} variant="h2" />
              <CountryCardContentItem
                label="Population"
                value={props.population.toLocaleString("en-US")}
              />
              <CountryCardContentItem label="Region" value={props.region} />
              <CountryCardContentItem label="Capital" value={props.capital} />
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Box
                className={`${props.isFavourite ? "set-fav-btn" : "fav-btn"}`}
              >
                <ButtonWithIcon
                  onClick={(event) => {
                    event.preventDefault();
                    props.indicateFavouriteStarBtn(props.id);
                  }}
                  variant="text"
                >
                  <Star />
                </ButtonWithIcon>
              </Box>
            </CardActions>
          </Card>
        </Link>
      </Box>
    </Grid>
  );
}

export default CountryCard;
