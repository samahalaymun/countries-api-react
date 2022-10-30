import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import { Box, Container, Grid } from "@mui/material";
import CardContentItem from "../components/common/CardContentItem";
import FavouriteCard from "../components/FavouriteCard";
import CountriesList from "../components/CountriesList/CountriesList";
import Spinner from "../components/common/Spinner";
import { applyFilter } from "../utils/utils";
import {
  allCountriesApi,
  deboune,
  isFavourite,
  searchApi,
  setTitle,
} from "../utils/utils";
import useLocalStorage from "../hooks/useLocalStorage";
import ErrorMessage from "../components/common/ErrorMessage";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [favouriteCountries, updateFavouriteCountries] = useLocalStorage(
    "favourites",
    []
  );
  const [searchInput, setSearchInput] = useState("");
  const [region, setRegion] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [fetchResult, setFetchResult] = useState(null);
  const [errors, setErrors] = useState(null);
  const { loading: countriesLoading, data: countries } =
    useFetch(allCountriesApi);
  const {
    loading: searchLoading,
    data: searchResult,
    error: fetchError,
  } = useFetch(searchInput && `${searchApi}${searchInput.toLowerCase()}`);

  useEffect(() => {
    if (countries) {
      setFetchResult(countries);
      setDisplayedCountries(countries);
      setTitle("Where in the world?");
    }
  }, [countries]);

  useEffect(() => {
    searchCountry();
  }, [searchResult, fetchError]);

  useEffect(() => {
    if (fetchResult) {
      let filteredCountries = applyFilter(
        region,
        searchInput,
        fetchResult,
        favouriteCountries
      );
      setDisplayedCountries(filteredCountries);
    }
  }, [region]);

  const onSearch = async (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchInput = deboune(onSearch, 500);

  const searchCountry = () => {
    if (searchInput.trim()) {
      setErrors(null);
      setFetchResult(searchResult);
      setDisplayedCountries(searchResult || []);
    } else {
      setErrors(null);
      setFetchResult(countries);
      setDisplayedCountries(countries);
    }
    searchInput.trim() && fetchError && !searchResult && setErrors("Oops! country not found");
  };

  const handleRegionFilter = (event) => {
    setRegion(event.target.value);
  };

  const handleDeleteFavouriteCountry = (id) => {
    let favourites = favouriteCountries.filter((element) => {
      return element.cca3 !== id;
    });
    updateFavouriteCountries(favourites);
  };

  const handleAddFavouriteCountry = (id) => {
    let country = fetchResult.find((item) => {
      return item.cca3 === id;
    });
    updateFavouriteCountries((prevState) => [...prevState, country]);
  };

  const indicateFavouriteStarBtn = (id) => {
    if (isFavourite(id, favouriteCountries)) {
      handleDeleteFavouriteCountry(id);
    } else {
      handleAddFavouriteCountry(id);
    }
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

  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Filter
            handleSearchInput={handleSearchInput}
            handleRegionFilter={handleRegionFilter}
            region={region}
          />
          {errors && <ErrorMessage error={errors} />}
          <Grid
            container
            sx={{ pb: 5, mt: { xs: 4, sm: 4, md: 4, lg: 4 } }}
            columns={12}
          >
            <Grid item lg={3} md={4} className="fav-section">
              <Box
                className={`section-container ${
                  isDragging ? "layout-dragging" : ""
                }`}
                onDrop={drop}
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDragEnter={dragEnter}
              >
                <CardContentItem value="Favourites" variant="h2" />
                <Box className="favourites-list">
                  {favouriteCountries.map(({ name, flags, cca3 }) => {
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
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={9} md={8}>
              <Box className="countries">
                <Grid
                  container
                  columns={12}
                  spacing={{ xs: 3, sm: 8, md: 5, lg: 5 }}
                >
                  {searchLoading || countriesLoading ? (
                    <Spinner />
                  ) : (
                    displayedCountries && (
                      <CountriesList
                        countries={displayedCountries}
                        favourites={favouriteCountries}
                        indicateFavouriteStarBtn={indicateFavouriteStarBtn}
                      />
                    )
                  )}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Home;
