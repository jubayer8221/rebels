"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  TextField,
  Button,
} from "@mui/material";

const ContactPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pt: 15, pb: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 950,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            Get in Touch
          </Typography>
          <Typography sx={{ color: "grey.500", mt: 2 }}>
            For order inquiries, collaborations, or general noise.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
          }}
        >
          {/* CONTACT INFO */}
          <Stack spacing={4}>
            <Box>
              <Typography
                variant="overline"
                sx={{ fontWeight: 800, color: "grey.400" }}
              >
                Email Us
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                support@rebels-archive.com
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="overline"
                sx={{ fontWeight: 800, color: "grey.400" }}
              >
                Location
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Studio 404, Shibuya <br /> Tokyo, Japan
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="overline"
                sx={{ fontWeight: 800, color: "grey.400" }}
              >
                Social
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                @rebels_archive
              </Typography>
            </Box>
          </Stack>

          {/* CONTACT FORM */}
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              fullWidth
              label="Full Name"
              variant="standard"
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              variant="standard"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Order Number (Optional)"
              variant="standard"
            />
            <TextField
              fullWidth
              label="Message"
              variant="standard"
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                borderRadius: 0,
                py: 2,
                fontWeight: 900,
                "&:hover": { bgcolor: "#333" },
              }}
            >
              SEND MESSAGE
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
