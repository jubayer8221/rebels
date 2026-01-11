"use client";

import React, { useState, ChangeEvent, useMemo } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Pagination,
  Stack,
  Chip,
  Drawer,
  ToggleButton,
  ToggleButtonGroup,
  InputBase,
  Paper,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import { PRODUCTS } from "../../config/shop.config";

const ShopPage = () => {
  // --- States ---
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const itemsPerPage = 10;

  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      const matchesCategory = category === "all" || prod.category === category;
      const matchesSearch = prod.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchQuery]);

  // --- Pagination Logic ---
  const count = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedItems = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChangePage = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Replace the old function with this type-safe version
  const handleCategoryChange = (
    _event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    if (newCategory !== null) {
      setCategory(newCategory);
      setPage(1);
    }
  };

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: 5 }}>
      {/* 1. MINIMAL STICKY HEADER */}
      <Box
        sx={{
          borderBottom: "1px solid #f0f0f0",
          py: 1,
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
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              variant="caption"
              sx={{
                fontWeight: 900,
                letterSpacing: "0.2em",
                color: "grey.500",
              }}
            >
              REBELS / ARCHIVE
            </Typography>
            <Chip
              label={`${filteredProducts.length} ITEMS`}
              size="small"
              sx={{
                height: 20,
                fontSize: "0.6rem",
                fontWeight: 800,
                borderRadius: 0,
              }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <Paper
              variant="outlined"
              sx={{
                px: 1,
                py: 0.5,
                display: "flex",
                alignItems: "center",
                borderRadius: 0,
                width: { xs: 120, md: 200 },
                border: "1px solid #eee",
              }}
            >
              <SearchIcon sx={{ fontSize: 18, color: "grey.400", mr: 1 }} />
              <InputBase
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ fontSize: "0.8rem", fontWeight: 600 }}
              />
            </Paper>
            <Button
              onClick={() => setIsFilterOpen(true)}
              startIcon={<FilterListIcon />}
              sx={{
                color: "#000",
                fontWeight: 900,
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
              }}
            >
              FILTERS
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* 2. CATEGORY QUICK-BAR */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={handleCategoryChange}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            "& .MuiToggleButton-root": {
              border: "none !important",
              borderRadius: "0 !important",
              fontWeight: 800,
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "#999",
              "&.Mui-selected": {
                color: "#000",
                bgcolor: "transparent",
                textDecoration: "underline",
                textUnderlineOffset: "8px",
              },
            },
          }}
        >
          <ToggleButton value="all">ALL COLLECTIONS</ToggleButton>
          <ToggleButton value="tshirts">T-SHIRTS</ToggleButton>
          <ToggleButton value="jackets">JACKETS</ToggleButton>
          <ToggleButton value="shirts">SHIRTS</ToggleButton>
          <ToggleButton value="pants">PANTS</ToggleButton>
        </ToggleButtonGroup>
      </Container>

      {/* 3. PRODUCT GRID */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            // Reduced gap from 4 to 2 for a tighter look
            gap: { xs: 1.5, md: 2, lg: 3 },
            gridTemplateColumns: {
              xs: "1fr 1fr", // 2 per row on mobile
              sm: "repeat(3, 1fr)", // 3 per row on tablets
              md: "repeat(4, 1fr)", // 4 per row on desktop
              lg: "repeat(5, 1fr)", // 5 per row on wide screens (Makes cards smaller)
            },
          }}
        >
          <AnimatePresence mode="popLayout">
            {paginatedItems.map((prod) => {
              const hasDiscount = !!prod.oldPrice && prod.oldPrice > prod.price;
              const discountPercentage = hasDiscount
                ? Math.round(
                    ((prod.oldPrice! - prod.price) / prod.oldPrice!) * 100
                  )
                : 0;

              return (
                <Box
                  key={prod.id}
                  layout
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  sx={{ position: "relative", group: "true" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "#f9f9f9",
                      aspectRatio: "3/4",
                    }}
                  >
                    {/* Tags */}
                    <Stack
                      spacing={1}
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        zIndex: 3,
                      }}
                    >
                      {hasDiscount && (
                        <Box
                          sx={{
                            bgcolor: "#000",
                            color: "#fff",
                            px: 1,
                            py: 0.5,
                            fontSize: "0.6rem",
                            fontWeight: 900,
                          }}
                        >
                          -{discountPercentage}%
                        </Box>
                      )}
                      {prod.isNew && (
                        <Box
                          sx={{
                            bgcolor: "primary.main",
                            color: "#fff",
                            px: 1,
                            py: 0.5,
                            fontSize: "0.6rem",
                            fontWeight: 900,
                          }}
                        >
                          NEW ARRIVAL
                        </Box>
                      )}
                    </Stack>

                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 3,
                        bgcolor: "rgba(255,255,255,0.8)",
                        "&:hover": { bgcolor: "#fff" },
                      }}
                      size="small"
                    >
                      <FavoriteBorderIcon fontSize="small" />
                    </IconButton>

                    {/* Image with Hover Effect */}
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        transition:
                          "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                        "&:hover": { transform: "scale(1.08)" },
                      }}
                    >
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>

                    {/* Quick Add Button */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        p: 1.5,
                        transform: "translateY(100%)",
                        transition: "0.3s ease-in-out",
                        ".MuiBox-root:hover > &": {
                          transform: "translateY(0)",
                        },
                        zIndex: 4,
                      }}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<ShoppingBagOutlinedIcon />}
                        sx={{
                          bgcolor: "#000",
                          color: "#fff",
                          fontWeight: 900,
                          borderRadius: 0,
                          py: 1.5,
                          "&:hover": { bgcolor: "#333" },
                        }}
                      >
                        ADD TO CART
                      </Button>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 2, textAlign: "center" }}>
                    <Typography
                      component={Link}
                      href={`/shop/product/${prod.id}`}
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        textDecoration: "none",
                        color: "#000",
                        letterSpacing: "0.05em",
                        mb: 0.5,
                        display: "block",
                      }}
                    >
                      {prod.name}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography sx={{ fontWeight: 900, fontSize: "0.9rem" }}>
                        ৳{prod.price.toLocaleString()}
                      </Typography>
                      {hasDiscount && (
                        <Typography
                          sx={{
                            color: "grey.400",
                            textDecoration: "line-through",
                            fontSize: "0.8rem",
                          }}
                        >
                          ৳{prod.oldPrice?.toLocaleString()}
                        </Typography>
                      )}
                    </Stack>
                  </Box>
                </Box>
              );
            })}
          </AnimatePresence>
        </Box>

        {/* 4. NO RESULTS STATE */}
        {filteredProducts.length === 0 && (
          <Stack alignItems="center" sx={{ py: 20 }}>
            <Typography variant="h6" fontWeight={900}>
              NO PRODUCTS FOUND
            </Typography>
            <Button
              onClick={() => {
                setCategory("all");
                setSearchQuery("");
              }}
              sx={{ mt: 2, color: "grey.600", textDecoration: "underline" }}
            >
              Clear all filters
            </Button>
          </Stack>
        )}

        {/* 5. MODERN PAGINATION */}
        {count > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 10,
              pt: 4,
              borderTop: "1px solid #f0f0f0",
            }}
          >
            <Pagination
              count={count}
              page={page}
              onChange={handleChangePage}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontWeight: 900,
                  borderRadius: 0,
                  "&.Mui-selected": { bgcolor: "#000", color: "#fff" },
                },
              }}
            />
          </Box>
        )}
      </Container>

      {/* 6. FILTER SIDEBAR (DRAWER) */}
      <Drawer
        anchor="right"
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      >
        <Box sx={{ width: { xs: "100vw", sm: 350 }, p: 4 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <Typography variant="h6" fontWeight={900}>
              FILTERS
            </Typography>
            <IconButton onClick={() => setIsFilterOpen(false)}>
              <ClearIcon />
            </IconButton>
          </Stack>

          <Typography
            variant="overline"
            sx={{ fontWeight: 900, mb: 2, display: "block" }}
          >
            Collections
          </Typography>
          <Stack spacing={1}>
            {["all", "tshirts", "jackets", "shirts", "pants"].map((cat) => (
              <Button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setIsFilterOpen(false);
                }}
                sx={{
                  justifyContent: "flex-start",
                  color: category === cat ? "#000" : "grey.500",
                  fontWeight: category === cat ? 900 : 500,
                  fontSize: "1rem",
                }}
              >
                {cat.toUpperCase()}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ShopPage;
