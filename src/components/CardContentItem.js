import { Typography } from "@mui/material";
import React from "react";

function CardContentItem({ label, value,variant,className}) {
  return (
    <Typography variant={variant} gutterBottom className={className}>
      <Typography variant="p">{label}</Typography>{" "}
      {value}
    </Typography>
  );
}

export default CardContentItem;
