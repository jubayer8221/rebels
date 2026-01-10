"use client";

import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Pagination,
  Stack,
  Chip,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";

import { PRODUCTS } from "../../config/shop.config";

const ShopPage = () => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 8;
  const count = Math.ceil(PRODUCTS.length / itemsPerPage);

  // Type-safe change handler for MUI Pagination
  const handleChangePage = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: 10 }}>
      {/* HEADER BAR */}
      <Box sx={{ borderBottom: "1px solid #eee", py: 2, mb: 4 }}>
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
            SHOP / ALL PRODUCTS
          </Typography>
          <Button
            startIcon={<FilterListIcon />}
            sx={{ color: "#000", fontWeight: 700 }}
          >
            Filter & Sort
          </Button>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2, md: 4 },
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            mb: 8,
          }}
        >
          {PRODUCTS.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(
            (prod) => {
              // Fix: Strict Type Guard for oldPrice
              const oldPriceValue = prod.oldPrice ?? 0;
              const hasDiscount = !!prod.oldPrice && prod.oldPrice > prod.price;

              const discountPercentage = hasDiscount
                ? Math.round(
                    ((oldPriceValue - prod.price) / oldPriceValue) * 100
                  )
                : 0;

              return (
                <Box
                  key={prod.id}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  sx={{ position: "relative" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "#f5f5f5",
                      aspectRatio: "3/4",
                    }}
                  >
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
                        <Chip
                          label={`-${discountPercentage}%`}
                          size="small"
                          sx={{
                            bgcolor: "#ff3d00",
                            color: "#fff",
                            fontWeight: 900,
                            borderRadius: 0,
                          }}
                        />
                      )}
                      {prod.isNew && (
                        <Chip
                          label="NEW"
                          size="small"
                          sx={{
                            bgcolor: "#000",
                            color: "#fff",
                            fontWeight: 900,
                            borderRadius: 0,
                          }}
                        />
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

                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.1)",
                        display: "flex",
                        alignItems: "flex-end",
                        opacity: 0,
                        transition: "0.3s ease",
                        p: 2,
                        "&:hover": { opacity: 1 },
                      }}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<ShoppingBagOutlinedIcon />}
                        sx={{
                          bgcolor: "#fff",
                          color: "#000",
                          fontWeight: 900,
                          borderRadius: 0,
                          py: 1.5,
                          "&:hover": { bgcolor: "#000", color: "#fff" },
                        }}
                      >
                        ADD TO CART
                      </Button>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography
                      component={Link}
                      href={`/shop/product/${prod.id}`}
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        textDecoration: "none",
                        color: "#000",
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      {prod.name}
                    </Typography>

                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: "1.1rem",
                          color: hasDiscount ? "#ff3d00" : "#000",
                        }}
                      >
                        ৳{prod.price.toLocaleString()}
                      </Typography>
                      {hasDiscount && (
                        <Typography
                          sx={{
                            color: "grey.400",
                            textDecoration: "line-through",
                            fontSize: "0.9rem",
                          }}
                        >
                          ৳{oldPriceValue.toLocaleString()}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              );
            }
          )}
        </Box>

        {/* PAGINATION */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 10,
            pt: 4,
            borderTop: "1px solid #eee",
          }}
        >
          <Pagination
            count={count}
            page={page}
            onChange={handleChangePage}
            shape="rounded"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                fontWeight: 900,
                borderRadius: 0,
                "&.Mui-selected": { bgcolor: "#000", color: "#fff" },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ShopPage;
