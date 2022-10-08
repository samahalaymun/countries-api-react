import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
function BackSection() {
  return (
    <>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        href="/countries-api-react"
        sx={{
          backgroundColor: "#fff",
          color: "#111517",
          textTransform: "none",
          paddingX: "37px",
          paddingY: "10px",
          fontSize:"16px",
          boxShadow:"0 0 4px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#111517",
            textTransform: "none",
          },marginTop:{xs:"50px",sm:"70px"},
          marginBottom:{xs:"50px",sm:"70px"}
        }}
      >
        Back
      </Button>
    </>
  );
}

export default BackSection;
