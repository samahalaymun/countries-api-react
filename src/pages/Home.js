import React, { useEffect, useMemo, useState } from "react";
import Filter from "../components/Filter";
import { Container, Grid } from "@mui/material";
import AsideSection from "../components/AsideSection";
import MainSection from "../components/MainSection";
import CardContentItem from "../components/common/CardContentItem";
import AsideSectionMainContent from "../components/AsideSectionMainContent";
import FavouriteCard from "../components/FavouriteCard";
import CountriesList from "../components/CountriesList/CountriesList";
import Spinner from "../components/common/Spinner";
import {
  applyRegionFilter,
  getAllCountries,
  getFavourites,
  isFavourite,
  onSearchInput,
} from "../services/countriesServices";
import { updateLocalStorage, deboune, setTitle } from "../utils/utils";

function Home() {
  const [countries, updateCountries] = useState([]);
  const [modifiedCountries, setModifiedCountries] = useState([]);
  const [favouriteCountries, updateFavouriteCountries] = useState(
    getFavourites() || []
  );
  const [loading, updateLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [region, setRegion] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  
  const handleSearchInput = async (event) => {
    setSearchInput(event.target.value);
  };
  const debouncedHandleSearch = deboune(handleSearchInput, 500);

  const handleRegionFilter = (event) => {
    setRegion(event.target.value);
  };

  const handleDeleteFavouriteCountry = (id) => {
    let favourites = favouriteCountries.filter((element) => {
      return element.cca3 !== id;
    });
    updateFavouriteCountries(favourites);
    updateLocalStorage("favourites", favourites);
  };

  const handleAddFavouriteCountry = (id) => {
    let country = countries.find((item) => {
      return item.cca3 === id;
    });
    updateFavouriteCountries((prevState) => [...prevState, country]);
    updateLocalStorage("favourites", [...favouriteCountries, country]);
  };

  const indicateFavouriteStarBtn = (id) => {
    if (isFavourite(id, favouriteCountries)) {
      handleDeleteFavouriteCountry(id);
    } else {
      handleAddFavouriteCountry(id);
    }
  };
  const searchCountry = async () => {
    if (searchInput.trim()) {
      const searchedCountries = await onSearchInput(searchInput);
      return searchedCountries;
    }
    return countries;
  };

  const drop = (event) => {
    const card_id = event.dataTransfer.getData("card-id");
    setIsDragging(false);
    let favourite = isFavourite(card_id, favouriteCountries);
    if (!favourite) {
      handleAddFavouriteCountry(card_id);
    }
  };

  const dragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  function dragLeave() {
    setIsDragging(false);
  }

  function dragEnter() {
    setIsDragging(true);
  }

  useEffect(() => {
    searchCountry()
      .then((data) => {
        let searchedCountries = data;
        let filteredCountries = applyRegionFilter(
          region,
          searchInput,
          searchedCountries,
          favouriteCountries
        );
        setModifiedCountries(filteredCountries);
      });
  }, [region, searchInput]);

  useEffect(() => {
    getAllCountries().then((data) => {
      updateCountries(data);
      setModifiedCountries(data);
      setTitle("Where in the world?");
    }).finally(()=> updateLoading(false));
  }, []);
  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Filter
            handleSearchInput={debouncedHandleSearch}
            handleRegionFilter={handleRegionFilter}
            region={region}
          />
          <Grid
            container
            sx={{ pb: 5, mt: { xs: 4, sm: 4, md: 4, lg: 4 } }}
            columns={12}
          >
            <Grid item lg={3} md={4} className="fav-section">
              <AsideSection
                className={`section-container ${
                  isDragging ? "layout-dragging" : ""
                }`}
                onDrop={drop}
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDragEnter={dragEnter}
              >
                <CardContentItem value="Favourites" variant="h2" />
                <AsideSectionMainContent className="favourites-list">
                  {favouriteCountries.map((favourite) => {
                    const { name, flags, cca3 } = favourite;
                    return (
                      <FavouriteCard
                        key={cca3}
                        name={name.common}
                        flag={flags.svg}
                        cca3={cca3}
                        className="country-info"
                        handleDeleteFav={handleDeleteFavouriteCountry}
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
                {loading ? (
                  <Spinner />
                ) : (
                  modifiedCountries && (
                    <CountriesList
                      countries={modifiedCountries}
                      favourites={favouriteCountries}
                      indicateFavouriteStarBtn={indicateFavouriteStarBtn}
                    />
                  )
                )}
              </MainSection>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Home;
