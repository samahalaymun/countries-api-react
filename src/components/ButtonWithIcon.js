import React from "react";
import { Button } from "@mui/material";

function ButtonWithIcon({label,variant,className,children,onClick ,name}) {
  return (
    <Button
      variant={variant}
      startIcon={children}
      onClick={onClick}
      className={className }
      name={name}
    >
      {label}
    </Button>
  );
}
export default ButtonWithIcon;
