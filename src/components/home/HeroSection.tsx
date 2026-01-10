"use client";

import React from "react";
import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SLIDE_DATA = [
  {
    title: "REBELS",
    subtitle: "Built for Men Who Break the Rules",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1920", // Placeholder for /image/banner/banner.PNG
    buttonText: "Shop Collection",
  },
  {
    title: "OUTLAWS",
    subtitle: "Define Your Own Standards",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1920",
    buttonText: "View Lookbook",
  },
  {
    title: "LEGENDS",
    subtitle: "Timeless Style for the Bold",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1920",
    buttonText: "Explore Now",
  },
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        position: "relative",
        overflow: "hidden",
        bgcolor: "#000",
        "&:hover .nav-btn": { opacity: 1 },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        style={{ height: "100%", width: "100%" }}
      >
        {SLIDE_DATA.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <Box
                sx={{
                  height: "100%",
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Container>
                  <Box sx={{ maxWidth: "800px" }}>
                    {/* Animated Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          <Typography
                            variant="h1"
                            sx={{
                              color: "white",
                              fontWeight: 900,
                              fontSize: { xs: "4rem", md: "8rem" },
                              lineHeight: 0.9,
                              mb: 2,
                              fontStyle: "italic",
                              letterSpacing: "-0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            {slide.title}
                          </Typography>

                          <Typography
                            variant="h5"
                            sx={{
                              color: "rgba(255,255,255,0.8)",
                              mb: 5,
                              fontWeight: 400,
                              textTransform: "uppercase",
                              letterSpacing: "0.3em",
                              fontSize: { xs: "1rem", md: "1.25rem" },
                            }}
                          >
                            {slide.subtitle}
                          </Typography>

                          <Button
                            variant="contained"
                            sx={{
                              bgcolor: "white",
                              color: "black",
                              px: 6,
                              py: 2.5,
                              borderRadius: 0,
                              fontWeight: 800,
                              fontSize: "1rem",
                              letterSpacing: "0.1em",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: "primary.main",
                                color: "white",
                                transform: "translateY(-5px)",
                              },
                            }}
                          >
                            {slide.buttonText}
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>
                </Container>
              </Box>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modern Navigation Controls */}
      <IconButton
        className="button-prev nav-btn"
        sx={{
          position: "absolute",
          left: { xs: 10, md: 40 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          color: "white",
          opacity: 0,
          transition: "0.4s",
          width: 60,
          height: 60,
          border: "1px solid rgba(255,255,255,0.2)",
          "&:hover": { bgcolor: "white", color: "black" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        className="button-next nav-btn"
        sx={{
          position: "absolute",
          right: { xs: 10, md: 40 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          color: "white",
          opacity: 0,
          transition: "0.4s",
          width: 60,
          height: 60,
          border: "1px solid rgba(255,255,255,0.2)",
          "&:hover": { bgcolor: "white", color: "black" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Elegant Progress Pagination */}
      <Box
        className="custom-pagination"
        sx={{
          position: "absolute",
          bottom: "50px !important",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          gap: "15px",
        }}
      />

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #fff !important;
          height: 2px !important;
          width: 60px !important;
          border-radius: 0 !important;
          margin: 0 !important;
          opacity: 0.2 !important;
          cursor: pointer;
          transition: all 0.3s ease !important;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1 !important;
          height: 4px !important;
          background: #fff !important;
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;
