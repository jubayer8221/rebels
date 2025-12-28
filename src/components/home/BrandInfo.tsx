// "use client";

// import { Typography, Box, Grid } from "@mui/material";

// const BrandInfo = () => {
//   return (
//     <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
//       <Grid container spacing={4} textAlign="center">
//         <Grid sm={12} md={4}>
//           <Typography color="black" variant="h6">
//             Premium Quality
//           </Typography>
//           <Typography>Crafted for durability and comfort</Typography>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6">Modern Design</Typography>
//           <Typography>Urban & bold fashion</Typography>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6">Fast Delivery</Typography>
//           <Typography>Across Bangladesh</Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default BrandInfo;

import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { brands } from "../../data/brands.data";
// import { brands } from "../../data/brands.data";

const BrandInfo = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our Brands
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        paragraph
      >
        Discover our curated collection of brands
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {brands.map((brand) => (
          <Grid item xs={12} sm={6} md={4} key={brand.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {brand.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {brand.description}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {brand.categories.map((category) => (
                    <Button
                      key={category}
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: 20 }}
                    >
                      {category}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BrandInfo;
