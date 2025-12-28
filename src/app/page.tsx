"use client";

import { Button, Typography } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import BrandInfo from "../components/home/BrandInfo";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <BrandInfo />
      <Typography variant="h4">MUI Installed Successfully</Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </>
  );
}
