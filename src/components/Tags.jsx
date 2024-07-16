import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ClearIcon from '@mui/icons-material/Clear';


export default function Tags({ selectedFilters, handleState }) {
  const font = '"Margarine", sans-serif';
  let { gender, origin, species, status } = selectedFilters;

  const MainHeadings = styled(Typography)(() => ({
    fontFamily: font, textAlign: "left", paddingBottom: "0.5rem",
    fontSize: "2rem"
  }));

  const CustomButton = styled(Button)(() => ({

    background: "#000",
    padding: "0.5rem 1rem",
    marginRight: "5px",
    fontSize: "0.8rem",
    alignSelf: "flex-start",
    color: "white",
    '&:hover': {
      backgroundColor: '#606060',
    
    }
  }))


  return (<Box sx={{ margin: { md: "1.5rem 2rem", xs: "1rem" } }}>
    <MainHeadings>Selected filters :</MainHeadings>
    <Box sx={{ height: "20vh", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>

      {origin?.length > 0 && origin.map((el, i) => {
        return <CustomButton variant="contained" key={i} onClick={() => handleState("origin", el)} endIcon={<ClearIcon />}>{el}</CustomButton>
      })}
      {gender?.length > 0 && gender.map((el, i) => {
        return <CustomButton variant="contained" key={i} onClick={() => handleState("gender", el)} endIcon={<ClearIcon />}>{el}</CustomButton>
      })}
      {species?.length > 0 && species.map((el, i) => {
        return <CustomButton variant="contained" key={i} onClick={() => handleState("species", el)} endIcon={<ClearIcon />}>{el}</CustomButton>
      })}
      {status?.length > 0 && status.map((el, i) => {
        return <CustomButton variant="contained" key={i} onClick={() => handleState("status", el)} endIcon={<ClearIcon />}>{el}</CustomButton>
      })}
    </Box>
  </Box>)
} 
