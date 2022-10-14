import { Box, Container } from "@mui/material";
import React from "react";
import "../App.css";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import ButtonWithIcon from "./ButtonWithIcon";
import CardContentItem from "./CardContentItem";

function Header() {
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
                onClick={() => {}}
                className="mode-btn"
              >
                <NightlightOutlinedIcon />
              </ButtonWithIcon>
            </Box>
          </Container>
        </Box>
      </header>
    </>
  );
}

export default Header;
