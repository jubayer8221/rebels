"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "../../config/shop.config";

const ShopPage = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      {/* Hero / Banner */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, md: 400 },
          mb: 6,
          borderRadius: 2,
          backgroundImage: "url('/image/shop-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(0,0,0,0.4)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: 700 }}>
            Shop Rebels Clothing
          </Typography>
        </Box>
      </Box>

      {/* Categories */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Categories
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {CATEGORIES.map((cat) => (
          <Grid item xs={12} sm={6} md={3} key={cat.id}>
            <Link href={cat.path}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover img": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={cat.image}
                  alt={cat.name}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    transition: "all 0.3s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    bgcolor: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    textAlign: "center",
                    py: 1,
                  }}
                >
                  {cat.name}
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Products */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        New Arrivals
      </Typography>
      <Grid container spacing={4}>
        {PRODUCTS.map((prod) => (
          <Grid item xs={12} sm={6} md={3} key={prod.id}>
            <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
              <CardMedia
                component="img"
                height="200"
                image={prod.image}
                alt={prod.name}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  {prod.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${prod.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  href={`/shop/product/${prod.id}`}
                >
                  View
                </Button>
                <Button size="small" color="secondary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopPage;
