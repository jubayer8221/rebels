"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { brands } from "../../config/brands.config";
import { motion } from "framer-motion";

const BrandInfo = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            mb: 8,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.8,
              fontSize: { xs: "3rem", md: "5rem" },
              letterSpacing: "-0.05em",
            }}
          >
            Our <br /> Partners
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "grey.500",
              maxWidth: "400px",
              pb: 1,
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            We collaborate with brands that redefine urban culture and technical
            craftsmanship.
          </Typography>
        </Box>

        {/* Custom CSS Grid for Brand Items */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {brands.map((brand, index) => (
            <Box
              key={brand.id}
              component={motion.div}
              whileHover="hover"
              sx={{
                p: { xs: 4, md: 6, border: 1, borderRadius: 1 },
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                borderRight: {
                  sm:
                    index % 2 === 0
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                  lg:
                    (index + 1) % 3 !== 0
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                },
                transition: "background-color 0.3s ease",
                "&:hover": { bgcolor: "rgba(255,255,255,0.03)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "grey.600",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                0{index + 1}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  textTransform: "uppercase",
                  mb: 2,
                  letterSpacing: "0.02em",
                }}
              >
                {brand.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "grey.400",
                  lineHeight: 1.8,
                  mb: 4,
                  minHeight: "60px",
                }}
              >
                {brand.description}
              </Typography>

              {/* Tag Cloud */}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {brand.categories.map((category) => (
                  <Box
                    key={category}
                    sx={{
                      fontSize: "0.65rem",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      px: 1.5,
                      py: 0.5,
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "100px",
                      color: "grey.500",
                      transition: "0.3s",
                      "&:hover": {
                        color: "#fff",
                        borderColor: "#fff",
                      },
                    }}
                  >
                    {category}
                  </Box>
                ))}
              </Box>

              {/* Animated Underline on Hover */}
              <Box
                component={motion.div}
                variants={{
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.4 }}
                sx={{
                  height: "2px",
                  bgcolor: "primary.main",
                  width: "0%",
                  mt: 3,
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BrandInfo;
