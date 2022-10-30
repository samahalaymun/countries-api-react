import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import ButtonWithIcon from "../components/common/ButtonWithIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import DetailsInfoSection from "../components/CountryDetails/DetailsInfoSection";
import { useParams } from "react-router-dom";
import Spinner from "../components/common/Spinner";
import { searchApi, setTitle } from "../utils/utils";
import { useFetch } from "../hooks/useFetch";

function Details() {
  const navigate = useNavigate();
  const { country } = useParams();
  const { loading, data: countryDetails } = useFetch(
    `${searchApi}${country}?fullText=true`
  );
  useEffect(() => {
    if (countryDetails) {
      setTitle(countryDetails[0].name.common);
    }
  }, [countryDetails]);
  return (
    <Container maxWidth="lg">
      <Box className="back-btn">
        <ButtonWithIcon
          label="Back"
          variant="contained"
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon />
        </ButtonWithIcon>
      </Box>
      {loading ? (
        <Spinner />
      ) : (
        <DetailsInfoSection details={countryDetails[0]} />
      )}
    </Container>
  );
}

export default Details;
