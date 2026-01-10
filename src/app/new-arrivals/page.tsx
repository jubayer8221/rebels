"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import Link from "next/link";

// Paths to your config and components
import { PRODUCTS } from "../../config/shop.config";
import ProductCard from "../../components/shop/ProductCard";

const NewArrivalsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter only products marked as isNew
  const newProducts = PRODUCTS.filter((p) => p.isNew === true);

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* SEASONAL HERO HEADER */}
      <Box
        sx={{
          bgcolor: "#f9f9f9",
          borderBottom: "1px solid #eee",
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          textAlign: "center",
          position: "relative",
        }}
      >
        <Container>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.6em",
              color: "primary.main",
              fontWeight: 800,
              display: "block",
              mb: 2,
            }}
          >
            Just Dropped
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: { xs: "3rem", md: "6rem" },
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            New Arrivals
          </Typography>
          <Typography
            sx={{
              mt: 3,
              color: "grey.600",
              maxWidth: "600px",
              mx: "auto",
              fontSize: "1.1rem",
            }}
          >
            The latest technical garments and seasonal staples from the Rebels
            Archive.
          </Typography>
        </Container>
      </Box>

      {/* TOOLBAR */}
      <Box
        sx={{
          borderBottom: "1px solid #eee",
          py: 2,
          position: "sticky",
          top: 0,
          bgcolor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          zIndex: 10,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, letterSpacing: "0.1em" }}
          >
            {newProducts.length} NEW ITEMS
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={() => setViewMode("grid")}
              sx={{ color: viewMode === "grid" ? "#000" : "#ccc" }}
            >
              <GridViewIcon />
            </IconButton>
            <IconButton
              onClick={() => setViewMode("list")}
              sx={{ color: viewMode === "list" ? "#000" : "#ccc" }}
            >
              <ViewDayIcon />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      {/* PRODUCT FEED */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {newProducts.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gap: { xs: 2, md: 4 },
              gridTemplateColumns:
                viewMode === "grid"
                  ? {
                      xs: "1fr 1fr",
                      md: "repeat(3, 1fr)",
                      lg: "repeat(4, 1fr)",
                    }
                  : "1fr",
            }}
          >
            {newProducts.map((product) => (
              <ProductCard key={product.id} prod={product} />
            ))}
          </Box>
        ) : (
          /* EMPTY FALLBACK */
          <Box sx={{ py: 15, textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>
              THE VAULT IS REPLENISHING
            </Typography>
            <Typography sx={{ color: "grey.500", mb: 4 }}>
              Check back soon for the next drop.
            </Typography>
            <Button
              component={Link}
              href="/shop"
              variant="contained"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                borderRadius: 0,
                px: 5,
                py: 1.5,
              }}
            >
              Explore Collection
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default NewArrivalsPage;
