import { Box } from "@mui/material";
import React from "react";
import "../App.css";

function AsideSection({
  className,
  children,
  onDrop,
  onDragOver,
  onDragLeave,
}) {
  return (
    <Box
      className={className}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {children}
    </Box>
  );
}
export default AsideSection;
