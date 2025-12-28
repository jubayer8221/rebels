"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { CATEGORIES } from "../../config/home.config";

const CategorySection = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={600} mb={3} textAlign="center">
        Shop by Category
      </Typography>

      <Grid container spacing={3}>
        {CATEGORIES.map((cat) => (
          <Grid key={cat.id} sx={{ border: 1, borderRadius: 2, p: 1 }}>
            <Box sx={{ position: "relative", cursor: "pointer" }}>
              <Image
                src={cat.image}
                alt={cat.title}
                width={300}
                height={350}
                style={{ width: "300px", height: "300px" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  color: "white",
                  fontWeight: 600,
                }}
              >
                {cat.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;
