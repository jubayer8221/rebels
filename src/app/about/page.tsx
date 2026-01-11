"use client";

import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";

const AboutPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pt: 5, pb: 5 }}>
      <Container maxWidth="lg">
        {/* BIG MANIFESTO HEADER */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.5em", color: "grey.500", fontWeight: 700 }}
          >
            EST. 2024
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "3.5rem", md: "7rem" },
              lineHeight: 0.9,
              mt: 2,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
            }}
          >
            The Rebels <br /> Manifesto.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 8,
            alignItems: "start",
          }}
        >
          {/* LEFT COLUMN - TEXT */}
          <Stack spacing={4}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                lineHeight: 1.4,
                fontWeight: 500,
                color: "#000",
              }}
            >
              We don&apos;t follow the cycle. We break it. Rebels was born out
              of a desire to merge technical precision with raw street culture.
            </Typography>
            <Typography sx={{ color: "grey.600", lineHeight: 1.8 }}>
              Our garments are designed for those who navigate the urban
              landscape with intent. Each piece is a balance of utility and
              aesthetic defiance—using premium heavyweight fabrics and modular
              constructions that adapt to your environment.
            </Typography>
            <Box sx={{ pt: 4, borderTop: "1px solid #eee" }}>
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
                OUR VALUES
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                Quality over volume. Purpose over trend. Silence over noise.
              </Typography>
            </Box>
          </Stack>

          {/* RIGHT COLUMN - RAW IMAGE */}
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000"
              alt="Brand Aesthetic"
              sx={{
                width: "100%",
                height: "auto",
                filter: "grayscale(100%)",
                transition: "filter 0.5s ease",
                "&:hover": { filter: "grayscale(0%)" },
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                bottom: -20,
                right: -20,
                bgcolor: "#000",
                color: "#fff",
                p: 3,
                fontWeight: 900,
                display: { xs: "none", md: "block" },
              }}
            >
              CRAFTED IN CHAOS
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
