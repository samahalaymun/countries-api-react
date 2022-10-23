import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function CountryBorders({ borders }) {

  return (
    <Box className="borders" id="borders">
      {borders.map((border) => {
        return (
          <Link to={`/details/${border}`} className="border" key={border}>
            {border}
          </Link>
        );
      })}
    </Box>
  );
}

export default CountryBorders;
