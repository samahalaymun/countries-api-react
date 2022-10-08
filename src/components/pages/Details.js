import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackSection from "../BackSection";
import DetailsInfoSection from "../DetailsInfoSection";
function Details() {
  document.title="Belgium"
  return (
    <Container maxWidth="lg">
      <BackSection></BackSection>
      <DetailsInfoSection></DetailsInfoSection>
    </Container>
  );
}

export default Details;
