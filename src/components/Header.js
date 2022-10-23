import { Box, Container } from "@mui/material";
import React, { useContext } from "react";
import "../App.css";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import NightlightIcon from "@mui/icons-material/Nightlight";
import ButtonWithIcon from "./common/ButtonWithIcon";
import CardContentItem from "./common/CardContentItem";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header>
        <Box className="nav">
          <Container maxWidth="lg">
            <CardContentItem className="brand-logo" variant="p" value="Where in the world?"/>
            <Box className="mode right">
              <ButtonWithIcon
                label="Dark Mode"
                variant="Text"
                onClick={toggleTheme}
                className="mode-btn"
              >
                {theme==="dark"?<NightlightIcon/>:<NightlightOutlinedIcon />}
              </ButtonWithIcon>
            </Box>
          </Container>
        </Box>
      </header>
    </>
  );
}

export default Header;
