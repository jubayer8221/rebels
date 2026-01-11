"use client";

import {
  Box,
  Typography,
  Container,
  CardActionArea,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CATEGORIES } from "../../config/homeCategory.config";
import Link from "next/link";

// 1. Fixed Variants with explicit Types to satisfy Overload errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      // Cubic-bezier must be cast or written as a valid Easing definition
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CategorySection = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 15 } }}>
      {/* Section Header */}
      <Stack spacing={1} sx={{ mb: 10, alignItems: "flex-start" }}>
        <Typography
          variant="overline"
          sx={{
            fontWeight: 800,
            letterSpacing: "0.4em",
            color: "primary.main",
            fontSize: "0.7rem",
          }}
        >
          Curated Collections
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            fontSize: { xs: "3rem", md: "4.5rem" },
            lineHeight: 0.9,
          }}
        >
          The Archive<span style={{ color: "#ccc" }}>.</span>
        </Typography>
      </Stack>

      {/* Grid Layout */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(12, 1fr)",
          },
          gridAutoRows: { md: "300px" },
        }}
      >
        {CATEGORIES.map((cat, index) => {
          const gridConfig = [
            { gridColumn: { md: "span 4" }, gridRow: { md: "span 2" } },
            { gridColumn: { md: "span 8" }, gridRow: { md: "span 1" } },
            { gridColumn: { md: "span 4" }, gridRow: { md: "span 1" } },
            { gridColumn: { md: "span 4" }, gridRow: { md: "span 1" } },
          ];

          return (
            <Box
              key={cat.id}
              component={motion.div}
              variants={itemVariants}
              sx={{
                ...gridConfig[index % gridConfig.length], // Use modulo to prevent index out of bounds
                position: "relative",
                overflow: "hidden",
                borderRadius: "2px",
              }}
            >
              {/* 2. Fixed 'path' error by using 'slug' from your config */}
              <Link
                href={`/category/${cat.slug}`}
                style={{ textDecoration: "none" }}
              >
                <CardActionArea
                  component={motion.div}
                  whileHover="hover"
                  sx={{
                    height: "100%",
                    width: "100%",
                    bgcolor: "#000",
                  }}
                >
                  <motion.div
                    variants={{ hover: { scale: 1.05, opacity: 0.7 } }}
                    transition={{ duration: 0.6 }}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Image
                      src={cat.image}
                      // 3. Fixed 'name' error by using 'title' from your config
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        objectFit: "cover",
                        filter: "grayscale(20%)",
                      }}
                    />
                  </motion.div>

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%)",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      p: 4,
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        mb: 0.5,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {/* 4. Fixed 'name' error here too */}
                      {cat.title}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: "20px",
                          height: "1px",
                          bgcolor: "primary.main",
                          transition: "0.3s",
                          ".MuiCardActionArea-root:hover &": { width: "40px" },
                        }}
                      />
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                        }}
                      >
                        Explore
                      </Typography>
                    </Stack>
                  </Box>

                  <Typography
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "0.7rem",
                      fontWeight: 900,
                      fontFamily: "monospace",
                    }}
                  >
                    0{index + 1}
                  </Typography>
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
