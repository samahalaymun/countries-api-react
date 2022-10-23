import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonWithIcon from "../components/common/ButtonWithIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import DetailsInfoSection from "../components/CountryDetails/DetailsInfoSection";
import { useParams } from 'react-router-dom';
import { getCountryDetails } from "../services/detailsServices";
import Spinner from "../components/common/Spinner";
import { setTitle } from "../utils/utils";


function Details() {
  const [details,setDetails]=useState({})
  const [loading, updateLoading] = useState(true);
  const navigate = useNavigate();
  const { country } = useParams();
  
  useEffect(()=>{
    getCountryDetails(country).then(data=>{
      updateLoading(false)
      setDetails(data);
      setTitle(data.name.common)
    })
  },[country])
  return (
    <Container maxWidth="lg">
      <Box className="back-btn">
        <ButtonWithIcon label="Back" variant="contained" onClick={()=>navigate('/')}>
          <ArrowBackIcon />
        </ButtonWithIcon>
      </Box>
      {loading?<Spinner/>:<DetailsInfoSection details={details}/>}
    </Container>
  );
}

export default Details;
