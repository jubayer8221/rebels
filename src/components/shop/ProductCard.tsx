"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Product } from "../../config/shop.config";

interface ProductCardProps {
  prod: Product;
}

const ProductCard = ({ prod }: ProductCardProps) => {
  // Logic for discount display
  const oldPriceValue = prod.oldPrice ?? 0;
  const hasDiscount = !!prod.oldPrice && prod.oldPrice > prod.price;
  const discountPercentage = hasDiscount
    ? Math.round(((oldPriceValue - prod.price) / oldPriceValue) * 100)
    : 0;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{ position: "relative", width: "100%" }}
    >
      {/* 1. IMAGE CONTAINER */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "#f9f9f9",
          aspectRatio: "3/4", // Professional fashion ratio
          "&:hover .hover-overlay": { opacity: 1 },
          "&:hover img": { scale: "1.05" },
        }}
      >
        {/* Badges */}
        <Stack
          spacing={1}
          sx={{ position: "absolute", top: 12, left: 12, zIndex: 3 }}
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
                fontSize: "0.65rem",
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
                fontSize: "0.65rem",
              }}
            />
          )}
        </Stack>

        {/* Wishlist Icon */}
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
          <FavoriteBorderIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>

        {/* Product Main Image */}
        <Image
          src={prod.image}
          alt={prod.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        />

        {/* 2. HOVER QUICK ACTION OVERLAY */}
        <Box
          className="hover-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.15)", // Subtle dark tint
            display: "flex",
            alignItems: "flex-end",
            opacity: 0,
            transition: "0.3s ease",
            p: 2,
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
              fontSize: "0.75rem",
              "&:hover": { bgcolor: "#000", color: "#fff" },
            }}
          >
            QUICK ADD
          </Button>
        </Box>
      </Box>

      {/* 3. PRODUCT INFO AREA */}
      <Box sx={{ mt: 2, textAlign: "left" }}>
        <Typography
          component={Link}
          href={`/shop/product/${prod.id}`}
          sx={{
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            textDecoration: "none",
            color: "#000",
            display: "block",
            mb: 0.5,
            letterSpacing: "0.05em",
            "&:hover": { opacity: 0.6 },
          }}
        >
          {prod.name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "1rem",
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
                fontSize: "0.85rem",
              }}
            >
              ৳{oldPriceValue.toLocaleString()}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
