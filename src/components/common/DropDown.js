import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DropDown({ label, className, id, minWidth,onChange,value, children }) {

  return (
    <>
      <FormControl
        sx={{ m: { sm: 1, lg: 1, md: 1 }, minWidth: { minWidth } }}
        className={className}
      >
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          id={id}
          value={value}
          label={label}
          onChange={onChange}
        >
          {children}
        </Select>
      </FormControl>
    </>
  );
}

export default DropDown;
