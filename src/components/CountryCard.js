import { Box, Grid, Icon, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Star } from "@mui/icons-material";
function CountryCard(props) {
  const setFav = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Box
        sx={{
          pl: {xs:"20px",sm:0,md:"20px",lg:"20px"},
          marginBottom: "20px",
        }}
      >
        <Link to={`/details/${props.country.cca3}`}>
          <Card
            className="country-card"
            sx={{
              boxShadow: "1px 1px 4px 1px rgba(48, 46, 77, 0.15)",
              borderRadius: "7px",
              "&:hover": {
                transform: "scale(1.03)",
                transition: "0.3s",
                boxShadow: "1px 1px 4px 4px rgba(48, 46, 77, 0.24)",
              },
            }}
          >
            <CardMedia
              component="img"
              alt={props.country.name.common}
              height="160"
              image={props.country.flags.svg}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h2"
                sx={{
                  fontSize: "16px",
                  fontWeight: "800",
                  marginBottom: "15px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color:"#111517"
                }}
              >
                {props.country.name.common}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontSize: "14px" ,color:"#111517"}}
              >
                <Typography variant="p" sx={{ fontWeight: "600" }}>
                  Population:
                </Typography>{" "}
                {props.country.population.toLocaleString("en-US")}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontSize: "14px" ,color:"#111517"}}
              >
                <Typography variant="p" sx={{ fontWeight: "600" }}>
                  Region:
                </Typography>{" "}
                {props.country.region}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontSize: "14px" ,color:"#111517"}}
              >
                <Typography variant="p" sx={{ fontWeight: "600" }}>
                  Capital:
                </Typography>{" "}
                {props.country.capital}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <IconButton
                onClick={setFav}
                size="medium"
                sx={{
                  display: { md: "none", lg: "none" },
                  color:"#ccc"
                }}
              >
                <Star />
              </IconButton>
            </CardActions>
          </Card>
        </Link>
      </Box>
    </Grid>
  );
}

export default CountryCard;
