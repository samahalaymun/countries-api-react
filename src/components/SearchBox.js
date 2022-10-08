import React from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import { Input, InputAdornment, styled, TextField ,InputBase} from "@mui/material";
import { Box } from "@mui/system";
import { StyledEngineProvider } from "@mui/material/styles";
function SearchBox({ placeholder }) {
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", maxWidth: "470px"}}>
      <SearchIcon className="search-icon"
        sx={{ position: "absolute", marginLeft: "25px", color: "#858585" }}
      />
      <InputBase
        type="text"
        placeholder={placeholder}
        fullWidth
        className="form-control"
        disableUnderline={true}
        onChange={handleInput}
      />
    </Box>
  );
}

export default SearchBox;
