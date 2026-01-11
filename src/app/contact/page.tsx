"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  TextField,
  Button,
  MenuItem,
  Divider,
  Link,
} from "@mui/material";

// --- DYNAMIC DATA ---
// Update this URL with your actual Google Maps CID or coordinate link
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Talertek,Khilkhet,Dhaka";

const INQUIRY_TYPES = [
  { value: "orders", label: "ORDER INQUIRY" },
  { value: "logistics", label: "SHIPPING & RETURNS" },
  { value: "wholesale", label: "WHOLESALE / STOCKIST" },
  { value: "archive", label: "ARCHIVE LOAN" },
];

const SUPPORT_STATS = [
  { label: "Avg Response", value: "4.2 Hrs" },
  { label: "Status", value: "Operational" },
  { label: "Timezone", value: "GMT+6" },
];

const ContactPage = () => {
  const [type, setType] = useState("orders");

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: 10, color: "#000" }}>
      {/* 1. TOP UTILITY BAR */}
      <Box sx={{ borderBottom: "1px solid #eee", py: 1 }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: "grey.500",
              }}
            >
              COMMUNICATIONS HUB / REBELS-001
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 800 }}>
              DHAKA, BD —{" "}
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 3 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 8, md: 15 }}
          alignItems="flex-start"
        >
          {/* LEFT COLUMN: BRAND INFO */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>

            <Typography
              sx={{
                color: "grey.600",
                fontSize: "1rem",
                mb: 6,
                maxWidth: "450px",
                lineHeight: 1.6,
              }}
            >
              Our communication lines are open for order inquiries and technical
              support. The Rebels Dhaka Archive is located in the heart of
              Khilkhet.
            </Typography>

            <Stack spacing={5}>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 900,
                    color: "grey.400",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  GENERAL ENQUIRIES
                </Typography>
                <Link
                  href="mailto:ops@rebels-archive.com"
                  sx={{
                    color: "#000",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    ops@rebels-archive.com
                  </Typography>
                </Link>
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 900,
                    color: "grey.400",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  DHAKA STUDIO
                </Typography>
                <Link
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#000",
                    textDecoration: "none",
                    "&:hover": { color: "grey.600" },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      lineHeight: 1.3,
                    }}
                  >
                    Talertek, Khilkhet <br /> Dhaka 1229, BD
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textDecoration: "underline", fontWeight: 700 }}
                  >
                    VIEW ON GOOGLE MAPS →
                  </Typography>
                </Link>
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 900,
                    color: "grey.400",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  INSTAGRAM
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.1rem" }}
                >
                  @rebels_archive
                </Typography>
              </Box>
            </Stack>

            {/* LIVE SUPPORT STATS */}
            <Box
              sx={{ mt: 8, p: 3, bgcolor: "#f9f9f9", border: "1px solid #eee" }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 900, display: "block", mb: 2 }}
              >
                SYSTEM PERFORMANCE
              </Typography>
              <Stack direction="row" spacing={4}>
                {SUPPORT_STATS.map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 900, fontSize: "1rem" }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "grey.500" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <Box
            component="form"
            sx={{ flex: 1.2, width: "100%", pt: { xs: 4, md: 1 } }}
          >
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 900, mb: 1, display: "block" }}
                >
                  SECURE TRANSMISSION
                </Typography>
                <Divider sx={{ bgcolor: "#000", height: 2 }} />
              </Box>

              {/* FIX: INQUIRY TYPE DROPDOWN */}
              <TextField
                select
                fullWidth
                label="INQUIRY TYPE"
                variant="standard"
                value={type}
                onChange={(e) => setType(e.target.value)}
                // This ensures the dropdown styling is visible and consistent
                SelectProps={{
                  native: false,
                  displayEmpty: true,
                  sx: { fontWeight: 700, fontSize: "0.9rem", py: 1 },
                }}
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontWeight: 900,
                    color: "#000",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                  },
                }}
              >
                {INQUIRY_TYPES.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ fontWeight: 700, fontSize: "0.85rem" }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
                <TextField
                  fullWidth
                  label="FULL NAME"
                  variant="standard"
                  required
                  InputLabelProps={{
                    shrink: true,
                    sx: {
                      fontWeight: 900,
                      color: "grey.500",
                      fontSize: "0.7rem",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="EMAIL ADDRESS"
                  variant="standard"
                  type="email"
                  required
                  InputLabelProps={{
                    shrink: true,
                    sx: {
                      fontWeight: 900,
                      color: "grey.500",
                      fontSize: "0.7rem",
                    },
                  }}
                />
              </Stack>

              <TextField
                fullWidth
                label="ORDER ID"
                variant="standard"
                placeholder="REB-XXXX"
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontWeight: 900,
                    color: "grey.500",
                    fontSize: "0.7rem",
                  },
                }}
              />

              <TextField
                fullWidth
                label="YOUR MESSAGE"
                variant="standard"
                multiline
                rows={4}
                required
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontWeight: 900,
                    color: "grey.500",
                    fontSize: "0.7rem",
                  },
                }}
              />

              <Box sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    borderRadius: 0,
                    py: 2,
                    fontWeight: 900,
                    letterSpacing: "0.1em",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#333", boxShadow: "none" },
                  }}
                >
                  SEND TRANSMISSION
                </Button>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mt: 3 }}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      bgcolor: "#000",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: "grey.500", fontWeight: 600 }}
                  >
                    Encrypted end-to-end. Your data is stored locally in Dhaka.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>

        {/* 5. MINIMALIST MAP EMBED */}
        <Box sx={{ mt: 15 }}>
          <Typography
            variant="caption"
            sx={{ fontWeight: 900, mb: 2, display: "block" }}
          >
            LOCATION DATA / TALERTEK ZONE
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "400px",
              bgcolor: "#eee",
              border: "1px solid #000",
              overflow: "hidden",
            }}
          >
            <iframe
              // This is a placeholder; use a real embed link from Google Maps for Khilkhet
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.098204646549!2d90.41935821500001!3d23.815124184557482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6563720769d%3A0xcf898393e15f592!2sKhilkhet%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1642123456789!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
