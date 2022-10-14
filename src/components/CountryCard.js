import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Star from "@mui/icons-material/Star";
import CardContentItem from "./CardContentItem";
import ButtonWithIcon from "./ButtonWithIcon";
import "../App.css"

function CountryCard(props) {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Box
        sx={props.sx}
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
              <CardContentItem
                value={props.name}
                label=""
                variant="h2"
              ></CardContentItem>
              <CardContentItem
                label="Population:"
                value={props.population.toLocaleString("en-US")}
                variant="body2"
              ></CardContentItem>
              <CardContentItem
                label="Region:"
                value={props.region}
                variant="body2"
              ></CardContentItem>
              <CardContentItem
                label="Capital:"
                value={props.capital}
                variant="body2"
              ></CardContentItem>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Box className="fav-btn">
                <ButtonWithIcon onClick={()=>{}} variant="text">
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
