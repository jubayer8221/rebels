"use client";

import { Box, Typography, Container, CardActionArea } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { CATEGORIES } from "../../config/home.config";
import Link from "next/link";

const CategorySection = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Section Header */}
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1,
          }}
        >
          Categories
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mt: 2,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            fontSize: "0.75rem",
          }}
        >
          Essentials for the Modern Rebel
        </Typography>
      </Box>

      {/* Modern CSS Grid Layout */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          // Mobile: 1 column | Tablet: 2 columns | Desktop: Custom layout
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(12, 1fr)",
          },
        }}
      >
        {CATEGORIES.map((cat, index) => {
          // Custom column spanning for that "Editorial" look
          // Item 1 and 4 take 7 columns, others take 5.
          const gridColumnSpan =
            index === 0 || index === 3 ? "span 7" : "span 5";

          return (
            <Box
              key={cat.id}
              sx={{
                gridColumn: { xs: "auto", md: gridColumnSpan },
              }}
            >
              <Link
                href={`/category/${cat.slug}`}
                style={{ textDecoration: "none" }}
              >
                <CardActionArea
                  component={motion.div}
                  whileHover="hover"
                  sx={{
                    position: "relative",
                    height: { xs: "350px", md: "500px" },
                    overflow: "hidden",
                    bgcolor: "#121212",
                  }}
                >
                  {/* Image Zoom Effect */}
                  <motion.div
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        filter: "brightness(0.8)",
                      }}
                    />
                  </motion.div>

                  {/* Text Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                    }}
                  >
                    <motion.div
                      variants={{ hover: { y: -10 } }}
                      transition={{ duration: 0.4 }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: "white",
                          fontWeight: 900,
                          textTransform: "uppercase",
                          fontSize: { xs: "1.75rem", md: "2.25rem" },
                          mb: 1,
                        }}
                      >
                        {cat.title}
                      </Typography>

                      <Box
                        sx={{
                          width: 0,
                          height: "2px",
                          bgcolor: "white",
                          transition: "0.4s ease",
                          ".MuiCardActionArea-root:hover &": { width: "100px" },
                        }}
                      />

                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.2em",
                          mt: 2,
                        }}
                      >
                        Shop Now
                      </Typography>
                    </motion.div>
                  </Box>
                </CardActionArea>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default CategorySection;
