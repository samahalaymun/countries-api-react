import { Box, Container } from "@mui/material";
import React from "react";
import ButtonWithIcon from "../ButtonWithIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import DetailsInfoSection from "../DetailsInfoSection";

function Details() {
  const navigate = useNavigate();
  document.title = "Belgium";
  return (
    <Container maxWidth="lg">
      <Box className="back-btn">
        <ButtonWithIcon label="Back" variant="contained" onClick={()=>navigate('/')}>
          <ArrowBackIcon />
        </ButtonWithIcon>
      </Box>
      <DetailsInfoSection></DetailsInfoSection>
    </Container>
  );
}

export default Details;
