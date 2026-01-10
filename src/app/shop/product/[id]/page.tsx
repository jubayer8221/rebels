"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Image from "next/image";
import { PRODUCTS } from "../../../../config/shop.config";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  const [size, setSize] = useState<string>("M");

  if (!product) return <Typography>Product Not Found</Typography>;

  const hasDiscount = !!product.oldPrice && product.oldPrice > product.price;

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        pt: { xs: 8, md: 12 },
        pb: 10,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" }, // Large image area
          }}
        >
          {/* LEFT: IMAGE GALLERY */}
          <Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                bgcolor: "#f5f5f5",
                overflow: "hidden",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </Box>
            {/* You can add a thumbnail grid here for multiple images */}
          </Box>

          {/* RIGHT: PRODUCT INFO */}
          <Box>
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.2em", color: "grey.500" }}
                >
                  {product.category}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    textTransform: "uppercase",
                    mt: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {product.name}
                </Typography>
              </Box>

              {/* PRICE SECTION */}
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    color: hasDiscount ? "#ff3d00" : "#000",
                  }}
                >
                  ৳{product.price.toLocaleString()}
                </Typography>
                {hasDiscount && (
                  <Typography
                    variant="h6"
                    sx={{
                      color: "grey.400",
                      textDecoration: "line-through",
                      fontWeight: 400,
                    }}
                  >
                    ৳{product.oldPrice?.toLocaleString()}
                  </Typography>
                )}
              </Box>

              <Divider />

              {/* SIZE SELECTOR */}
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 800, mb: 1.5, textTransform: "uppercase" }}
                >
                  Select Size: {size}
                </Typography>
                <ToggleButtonGroup
                  value={size}
                  exclusive
                  onChange={(_, newSize) => newSize && setSize(newSize)}
                  sx={{
                    gap: 1,
                    flexWrap: "wrap",
                    "& .MuiToggleButtonGroup-grouped": {
                      border: "1px solid #ddd !important",
                    },
                  }}
                >
                  {["S", "M", "L", "XL", "XXL"].map((s) => (
                    <ToggleButton
                      key={s}
                      value={s}
                      sx={{
                        width: 60,
                        height: 45,
                        borderRadius: 0,
                        fontWeight: 700,
                        "&.Mui-selected": {
                          bgcolor: "#000",
                          color: "#fff",
                          "&:hover": { bgcolor: "#333" },
                        },
                      }}
                    >
                      {s}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>

              {/* ACTION BUTTONS */}
              <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    py: 2,
                    borderRadius: 0,
                    fontWeight: 900,
                    fontSize: "1rem",
                    "&:hover": { bgcolor: "#333" },
                  }}
                >
                  ADD TO BAG
                </Button>
                <IconButton
                  sx={{ border: "1px solid #eee", borderRadius: 0, px: 2 }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "success.main",
                  pt: 1,
                }}
              >
                <LocalShippingOutlinedIcon fontSize="small" />
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  FREE DELIVERY ON ORDERS OVER ৳5,000
                </Typography>
              </Box>

              {/* DETAILS ACCORDION */}
              <Box sx={{ pt: 4 }}>
                <Accordion
                  elevation={0}
                  sx={{
                    borderTop: "1px solid #eee",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        textTransform: "uppercase",
                        fontSize: "0.8rem",
                      }}
                    >
                      Product Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.8 }}
                    >
                      • 100% Premium Cotton
                      <br />
                      • Heavyweight Fabric (240 GSM)
                      <br />
                      • Oversized Rebels Fit
                      <br />• Dropped Shoulders
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} sx={{ borderTop: "1px solid #eee" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        textTransform: "uppercase",
                        fontSize: "0.8rem",
                      }}
                    >
                      Shipping & Returns
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      Standard delivery takes 3-5 business days across
                      Bangladesh. 7-day easy return policy.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;
