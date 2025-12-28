"use client";

import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        backgroundImage: "url('/image/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography variant="h2" color="white" fontWeight={700}>
          REBELS
        </Typography>
        <Typography variant="h5" color="white" sx={{ my: 2 }}>
          Built for Men Who Break the Rules
        </Typography>
        <Button variant="contained" size="large">
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
