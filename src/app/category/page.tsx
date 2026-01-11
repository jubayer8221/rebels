"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import { CATEGORIES } from "../../config/shop.config";

const AllCategoriesPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pt: 4, pb: 10 }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.4em", color: "grey.500", fontWeight: 600 }}
          >
            The Collection
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 950,
              textTransform: "uppercase",
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              letterSpacing: "-0.02em",
              mt: 1,
            }}
          >
            Shop by Category
          </Typography>
        </Box>

        {/* Categories Layout using CSS Grid via Box */}
        <Box
          sx={{
            display: "grid",
            gap: 3,
            // 1 column on mobile, 2 on tablet, 4 on desktop
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {CATEGORIES.map((cat) => (
            <Link
              href={cat.path}
              key={cat.id}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 0,
                  overflow: "hidden",
                  border: "none",
                  height: "500px",
                  bgcolor: "#f5f5f5",
                }}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={cat.image}
                    alt={cat.name}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "scale(1.08)",
                      },
                    }}
                  />

                  {/* Dark Overlay Gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 4,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#fff",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        mb: 1,
                        fontSize: "1.75rem",
                      }}
                    >
                      {cat.name}
                    </Typography>
                    <Typography
                      variant="button"
                      sx={{
                        color: "#fff",
                        borderBottom: "2px solid #fff",
                        width: "fit-content",
                        pb: 0.5,
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        fontWeight: 700,
                      }}
                    >
                      Explore Collection
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AllCategoriesPage;
