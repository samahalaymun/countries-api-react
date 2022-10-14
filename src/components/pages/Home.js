import React from "react";
import Filter from "../Filter";
import { Container, Grid } from "@mui/material";
import AsideSection from "../AsideSection";
import MainSection from "../MainSection";
import CountryCard from "../CountryCard";
import CardContentItem from "../CardContentItem";
import AsideSectionMainContent from "../AsideSectionMainContent";
import FavouriteCard from "../FavouriteCard";

function Home() {
  const countries = [
    {
      name: "Iceland",
      flag: "https://flagcdn.com/is.svg",
      cca3: "ISL",
      population: 366425,
      region: "Europe",
      capital: "Reykjavik",
    },
    {
      name: "Spain",
      flag: "https://flagcdn.com/es.svg",
      cca3: "ESP",
      population: 47351567,
      region: "Europe",
      capital: "Madrid",
    },
    {
      name: "Iraq",
      flag: "https://flagcdn.com/iq.svg",
      cca3: "IRQ",
      population: 40222503,
      region: "Asia",
      capital: "Baghdad",
    },
    {
      name: "Malawi",
      flag: "https://flagcdn.com/mw.svg ",
      cca3: "MWI",
      population: 19129955,
      region: "Africa",
      capital: "Lilongwe",
    },
    {
      name: "Hong Kong",
      flag: "https://flagcdn.com/hk.svg",
      cca3: "HKG",
      population: 40222503,
      region: "Asia",
      capital: "City of Victoria",
    },
    {
      name: "Malta",
      flag: "https://flagcdn.com/mt.svg",
      cca3: "MLT",
      population: 525285,
      region: "Europe",
      capital: "Valletta",
    },
  ];

  const favourites = [
    {
      name: "Iceland",
      flag: "https://flagcdn.com/is.svg",
      cca3: "352",
    },
    {
      name: "America",
      flag: "https://flagcdn.com/us.svg",
      cca3: "352",
    },
    {
      name: "Germany",
      flag: "https://flagcdn.com/de.svg",
      cca3: "352",
    },
  ];
  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Filter />
          <Grid
            container
            sx={{ pb: 5, mt: { xs: 4, sm: 4, md: 4, lg: 4 } }}
            columns={12}
          >
            <Grid item lg={3} md={4} className="fav-section">
              <AsideSection className="section-container">
                <CardContentItem value="Favourites" variant="h2" />
                <AsideSectionMainContent className="favourites-list">
                  {favourites.map((favourite) => {
                    const { name, flag, cca3 } = favourite;
                    return (
                      <FavouriteCard
                        name={name}
                        flag={flag}
                        cca3={cca3}
                        className="country-info"
                      ></FavouriteCard>
                    );
                  })}
                </AsideSectionMainContent>
              </AsideSection>
            </Grid>
            <Grid item xs={12} sm={12} lg={9} md={8}>
              <MainSection
                className="countries"
                spacing={{ xs: 3, sm: 8, md: 5, lg: 5 }}
                columns={12}
              >
                {countries.map((country) => {
                  const { name, flag, cca3, population, region, capital } =
                    country;
                  return (
                    <CountryCard
                      name={name}
                      flag={flag}
                      cca3={cca3}
                      population={population}
                      capital={capital}
                      region={region}
                      to={`/details/${cca3}`}
                      sx={{
                        pl: { xs: "30px", sm: 0, md: "20px", lg: "20px" },
                        pr: { xs: "30px", sm: "10px", md: 0 },
                        marginBottom: "20px",
                      }}
                    ></CountryCard>
                  );
                })}
              </MainSection>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Home;
