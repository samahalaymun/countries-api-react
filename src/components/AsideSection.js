import { Box } from "@mui/material";
import React from "react";
import "../App.css";

function AsideSection({className ,children}) {
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
    <Box className={className}>
      {children}
    </Box>
  );
}
export default AsideSection;
