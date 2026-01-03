import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export const MuiDemo1 = () => {
  const girdStyle = { height: "200px", backgroundColor: "pink" };
  return (
    <Box
      sx={{
        minHeight: "500px",
        width: "98.5%",
        backgroundColor: "#FFF0F5",
        border: "1px solid",
        m: 2,
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Grid Demo
      </Typography>
      <Grid container spacing={2}>
        {/* <Grid size={8} sx={{ height: "200px", backgroundColor: "pink" }}></Grid>
        <Grid size={4} sx={{ height: "200px", backgroundColor: "pink" }}></Grid>
        <Grid size={4} sx={{ height: "200px", backgroundColor: "pink" }}></Grid>
        <Grid size={4} sx={{ height: "200px", backgroundColor: "pink" }}></Grid>
        <Grid size={4} sx={{ height: "200px", backgroundColor: "pink" }}></Grid> */}

        {/* <Grid size={{xs:12,sm:12,md:8,lg:8,xl:8}} sx={{ height: "200px", backgroundColor: "pink" }}></Grid>
        <Grid size={{xs:12,sm:12,md:4,lg:4,xl:4}} sx={{ height: "200px", backgroundColor: "pink" }}></Grid>

        <Grid size={{xs:12,sm:12,md:4,lg:4,xl:4}} sx={{ height: "200px", backgroundColor: "pink" }}></Grid>
        <Grid size={{xs:12,sm:12,md:4,lg:4,xl:4}} sx={{ height: "200px", backgroundColor: "pink" }}></Grid>
        <Grid size={{xs:12,sm:12,md:4,lg:4,xl:4}} sx={{ height: "200px", backgroundColor: "pink" }}></Grid> */}

        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} sx={girdStyle}></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} sx={girdStyle} ></Grid>

        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} sx={girdStyle}></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} sx={{...girdStyle,backgroundColor:"black"}}></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} sx={girdStyle}></Grid>
      </Grid>
    </Box>
  );
};
