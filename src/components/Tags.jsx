import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

// import pattern from "./assets/denim.webp"
import ClearIcon from '@mui/icons-material/Clear';


export default function Tags({selectedFilters,handleState}){
    const font =  '"Margarine", sans-serif';
    let {genderTrue,originTrue,speciesTrue,statusTrue}=selectedFilters;
    const MainHeadings= styled(Typography)(() => ({
        fontFamily:font,textAlign:"left",paddingBottom:"0.5rem",
        fontSize:"2rem"
        }));

        const CustomButton =styled(Button)(()=>({

            background:"#000",
            padding:"0.5rem 1rem", 
            marginRight:"5px",
            fontSize:"0.8rem",
            alignSelf:"flex-start",
            color:"white",
                '&:hover': {
                backgroundColor: '#606060',
                // color: '#3c52b2',
            }
          }))


    return( <Box sx={{margin:{md:"1.5rem 2rem",xs:"1rem"}}}>
    <MainHeadings>Selected filters :</MainHeadings> 
    <Box sx={{height:"20vh",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"}}>
    
     {originTrue?.length>0 && originTrue.map((el,i)=>{
       return     <CustomButton variant="contained" key={i} onClick={()=>handleState("origin",false,el)} endIcon={<ClearIcon/>}>{el}</CustomButton>
     })}
     {genderTrue?.length>0 && genderTrue.map((el,i)=>{
       return     <CustomButton variant="contained" key={i} onClick={()=>handleState("gender",false,el)}  endIcon={<ClearIcon/>}>{el}</CustomButton>
     })}
     {speciesTrue?.length>0 && speciesTrue.map((el,i)=>{
       return     <CustomButton variant="contained" key={i} onClick={()=>handleState("species",false,el)}  endIcon={<ClearIcon/>}>{el}</CustomButton>
     })}
     {statusTrue?.length>0 && statusTrue.map((el,i)=>{
       return     <CustomButton variant="contained" key={i} onClick={()=>handleState("status",false,el)}  endIcon={<ClearIcon/>}>{el}</CustomButton>
     })}
     </Box>
     </Box>)
} 