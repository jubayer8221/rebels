"use client";
// import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import ShopPage from "./shop/page";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <CategorySection />
      <ShopPage />
    </>
  );
}
