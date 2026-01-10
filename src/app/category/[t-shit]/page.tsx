"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import Link from "next/link";

// Update these paths based on your actual file structure
import { PRODUCTS } from "../../../config/shop.config";
import ProductCard from "../../../components/shop/ProductCard";

const CategoryPage = () => {
  const params = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  /**
   * 1. SLUG EXTRACTION
   * Matches your folder name: [t-shit]
   */
  const slug = (params?.["t-shit"] as string) || "";

  /**
   * 2. SMART FILTER LOGIC
   * Normalizes "t-shirt" and "tshirts" to match correctly
   */
  const filteredProducts = PRODUCTS.filter((p) => {
    const clean = (str: string) =>
      String(str)
        .toLowerCase()
        .replace(/-/g, "") // remove hyphens
        .replace(/\s/g, "") // remove spaces
        .replace(/s$/, ""); // remove trailing 's'

    return clean(p.category) === clean(slug);
  });

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* HEADER SECTION */}
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          pt: 15,
          pb: 10,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.5em", color: "grey.500" }}
          >
            Collection Archive
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 900, textTransform: "uppercase" }}
          >
            {slug ? slug.replace("-", " ") : "Category"}
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
          bgcolor: "#fff",
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
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {filteredProducts.length} PRODUCTS FOUND
          </Typography>

          <Stack direction="row" spacing={1}>
            {/* Fix: Changed color="black" to use sx styling to avoid TS error */}
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

      {/* PRODUCT GRID */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {filteredProducts.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gap: 4,
              gridTemplateColumns:
                viewMode === "grid"
                  ? { xs: "1fr 1fr", md: "repeat(4, 1fr)" }
                  : "1fr",
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} prod={product} />
            ))}
          </Box>
        ) : (
          <Box sx={{ py: 10, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
              THE ARCHIVE IS EMPTY
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              URL Slug: {slug} | No matching products found.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              href="/shop"
              sx={{ bgcolor: "#000", color: "#fff", borderRadius: 0, px: 4 }}
            >
              Return to Shop
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CategoryPage;
