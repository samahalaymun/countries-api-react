import {
  Box,
  Container,
  IconButton,
} from "@mui/material";
import React, { useContext } from "react";
import "../App.css";
import { Context } from "../Helper/Context";
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
function Header() {
  //  const {theme, toggle} = useContext(Context)
  return (
    <>
      <header>
        <Box className="nav">
          <Container maxWidth="lg">
            <span className="brand-logo">Where in the world?</span>
            <Box className="mode right">
              <IconButton size="medium" className="mode-btn">
                <NightlightOutlinedIcon />
                Dark Mode
              </IconButton>
            </Box>
          </Container>
        </Box>
      </header>
    </>
  );
}

export default Header;
