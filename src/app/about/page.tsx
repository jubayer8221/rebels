"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// --- DYNAMIC DATA CONFIGURATION ---
const BRAND_VALUES = [
  {
    title: "ETHICAL SOURCING",
    desc: "100% GOTS certified organic cotton. We only work with mills that provide living wages.",
  },
  {
    title: "TECHNICAL PRECISION",
    desc: "Our garments feature reinforced stitching and modular utility, built for the urban nomad.",
  },
  {
    title: "ZERO WASTE",
    desc: "We use pre-order models and deadstock fabrics to ensure no garment ends up in a landfill.",
  },
];

const COST_BREAKDOWN = [
  {
    label: "Raw Materials",
    value: "32%",
    detail: "Premium Heavyweight Fabrics",
  },
  { label: "Labor", value: "28%", detail: "Fair-Wage Artisans" },
  { label: "Logistics", value: "15%", detail: "Eco-Friendly Transit" },
  { label: "R&D", value: "25%", detail: "Future Tech Development" },
];

const POLICIES = [
  {
    title: "GLOBAL LOGISTICS",
    content:
      "We ship to over 50 countries. Express orders are processed within 24 hours. Carbon-neutral shipping is our standard, not an option.",
  },
  {
    title: "THE REBELS GUARANTEE",
    content:
      "14-day return window for all unworn items. We provide a pre-paid shipping label to ensure your experience is as seamless as our designs.",
  },
  {
    title: "LIFETIME MAINTENANCE",
    content:
      "If a seam rips or a button falls, send it back. We repair all Rebels garments for free, forever. We build things to last.",
  },
];

const AboutPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        pb: 10,
        color: "#000",
        overflowX: "hidden",
      }}
    >
      {/* 1. DYNAMIC TICKER */}
      <Box
        sx={{
          borderBottom: "1px solid #000",
          py: 1.5,
          bgcolor: "#000",
          color: "#fff",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marquee 30s linear infinite",
            "@keyframes marquee": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <Typography
              key={i}
              variant="caption"
              sx={{ fontWeight: 900, letterSpacing: "0.3em", px: 4 }}
            >
              SYSTEM STATUS: ACTIVE • BATCH 004 VERIFIED • SUSTAINABLE UTILITY •
              NO COMPROMISE •
            </Typography>
          ))}
        </Box>
      </Box>

      {/* 2. HERO HEADER */}
      <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 5 }, pb: 8 }}>
        <Stack spacing={2}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.6em", color: "grey.500", fontWeight: 800 }}
          >
            TRANSPARENCY REPORT v1.02
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              lineHeight: 0.85,
              textTransform: "uppercase",
              letterSpacing: "-0.05em",
            }}
          >
            The New <br /> Standard.
          </Typography>
        </Stack>
      </Container>

      {/* 3. COST BREAKDOWN MODULE */}
      <Box
        sx={{
          borderTop: "2px solid #000",
          borderBottom: "2px solid #000",
          bgcolor: "#f9f9f9",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Typography
            variant="button"
            sx={{ fontWeight: 900, mb: 2, display: "block" }}
          >
            Where your money goes:
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 2 }}
            sx={{ alignItems: "flex-start" }}
          >
            {COST_BREAKDOWN.map((item, idx) => (
              <Box key={idx} sx={{ flex: 1, width: "100%" }}>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: 900, lineHeight: 1 }}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 800, mt: 1, textTransform: "uppercase" }}
                >
                  {item.label}
                </Typography>
                <Typography variant="caption" sx={{ color: "grey.500" }}>
                  {item.detail}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* 4. CONTENT & SIDEBAR */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 8, md: 12 }}
          alignItems="flex-start"
        >
          {/* LEFT: THE MANIFESTO CONTENT */}
          <Box sx={{ flex: 1.3 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                mb: 4,
                textTransform: "uppercase",
                lineHeight: 0.9,
              }}
            >
              Crafted in Chaos, <br /> Built for Silence.
            </Typography>

            <Typography
              sx={{
                fontSize: "1.3rem",
                lineHeight: 1.6,
                mb: 6,
                color: "#333",
                maxWidth: "600px",
              }}
            >
              REBELS was founded on the belief that clothing is armor. We
              don&apos;t participate in the fast-fashion noise. We build
              high-performance garments that bridge the gap between technical
              utility and street aesthetic.
            </Typography>

            {/* BRAND VALUES SECTION (REPLACED GRID WITH STACK) */}
            <Box sx={{ mb: 8, maxWidth: "600px" }}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 900,
                  letterSpacing: "0.2em",
                  color: "grey.500",
                  mb: 4,
                  display: "block",
                }}
              >
                TECHNICAL SPECIFICATIONS
              </Typography>
              <Stack
                spacing={4}
                divider={<Divider sx={{ borderColor: "#eee" }} />}
              >
                {BRAND_VALUES.map((value, index) => (
                  <Box key={index}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        fontSize: "0.9rem",
                        mb: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      [{index + 1}] {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "grey.600", lineHeight: 1.6 }}
                    >
                      {value.desc}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                position: "relative",
                mb: 6,
                "&:hover img": { filter: "grayscale(0%)" },
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200"
                sx={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  transition: "filter 0.8s ease",
                }}
              />
              <Chip
                label="HQ: KHILKHET, DHAKA"
                sx={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  bgcolor: "#000",
                  color: "#fff",
                  borderRadius: 0,
                  fontWeight: 900,
                }}
              />
            </Box>

            <Box sx={{ border: "1px solid #eee", p: 4, bgcolor: "#fafafa" }}>
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
                A NOTE FROM THE FOUNDERS
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: "italic", color: "grey.700", mb: 3 }}
              >
                &quot;We wanted to build a brand that we could trust. No hidden
                margins, no exploitation, just quality that you can feel the
                moment you put it on.&quot;
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  letterSpacing: "0.2em",
                  fontSize: "1.2rem",
                }}
              >
                R. & S. — REBELS
              </Typography>
            </Box>
          </Box>

          {/* RIGHT SIDEBAR */}
          <Box
            sx={{
              flex: 0.7,
              width: "100%",
              position: { md: "sticky" },
              top: 40,
            }}
          >
            <Stack spacing={4}>
              <Box sx={{ bgcolor: "#000", color: "#fff", p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 900, mb: 3, letterSpacing: "-0.02em" }}
                >
                  CORE POLICIES
                </Typography>
                <Stack spacing={1}>
                  {POLICIES.map((policy, i) => (
                    <Accordion
                      key={i}
                      sx={{
                        bgcolor: "transparent",
                        color: "#fff",
                        boxShadow: "none",
                        borderBottom: "1px solid #333",
                        "&:before": { display: "none" },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                        sx={{ px: 0 }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            textTransform: "uppercase",
                          }}
                        >
                          {policy.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 0 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "grey.400", lineHeight: 1.6 }}
                        >
                          {policy.content}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ border: "2px solid #000", p: 4 }}>
                <Typography
                  variant="overline"
                  sx={{ fontWeight: 900, color: "red" }}
                >
                  Digital Sovereignty
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 900, mt: 1, mb: 1 }}>
                  NFC AUTHENTICATION
                </Typography>
                <Typography variant="body2" sx={{ color: "grey.600", mb: 3 }}>
                  Every garment is embedded with an encrypted NFC chip. Scan to
                  view its owner history and fabric certification.
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  SECURED BY REBELS PROTOCOL
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutPage;
