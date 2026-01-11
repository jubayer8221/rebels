"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  QUICK_LINKS,
  SOCIAL_LINKS,
  SUPPORT_LINKS,
} from "../../config/footer.config";

const socialIconMap: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon fontSize="inherit" />,
  facebook: <FacebookIcon fontSize="inherit" />,
  twitter: <TwitterIcon fontSize="inherit" />,
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#000", color: "#fff", pt: 6, pb: 3 }}
    >
      <Container maxWidth="xl">
        {/* MAIN TOP SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          {/* LEFT: NEWSLETTER (Brand Focus) */}
          <Box sx={{ flex: 1, maxWidth: { lg: "650px" } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                textTransform: "uppercase",
                mb: 2,
                letterSpacing: "-0.04em",
              }}
            >
              Stay Rebel.
            </Typography>
            <Typography
              sx={{
                color: "grey.500",
                mb: 4,
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              Unlock the archive. Be the first to know about seasonal drops,
              limited collaborations, and secret releases.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "2px solid #333",
                py: 1,
              }}
            >
              <TextField
                variant="standard"
                placeholder="YOUR EMAIL"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                  },
                }}
              />
              <IconButton
                sx={{
                  color: "#fff",
                  p: 0,
                  "&:hover": { transform: "translateX(5px)" },
                  transition: "0.3s",
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>

          {/* RIGHT: NAVIGATION (Dynamic Flex Links) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 6, sm: 10, md: 15 },
              width: { xs: "100%", lg: "auto" },
            }}
          >
            {/* COLUMN 1 */}
            <Stack spacing={2}>
              <Typography
                variant="caption"
                sx={{
                  color: "grey.600",
                  fontWeight: 900,
                  letterSpacing: "0.2em",
                }}
              >
                NAVIGATION
              </Typography>
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, "&:hover": { color: "grey.500" } }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>

            {/* COLUMN 2 */}
            <Stack spacing={2}>
              <Typography
                variant="caption"
                sx={{
                  color: "grey.600",
                  fontWeight: 900,
                  letterSpacing: "0.2em",
                }}
              >
                SUPPORT
              </Typography>
              {SUPPORT_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, "&:hover": { color: "grey.500" } }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>

            {/* COLUMN 3: SOCIAL */}
            <Stack spacing={2}>
              <Typography
                variant="caption"
                sx={{
                  color: "grey.600",
                  fontWeight: 900,
                  letterSpacing: "0.2em",
                }}
              >
                SOCIAL
              </Typography>
              <Stack direction="row" spacing={2}>
                {SOCIAL_LINKS.map((social) => (
                  <IconButton
                    key={social.id}
                    component="a"
                    href={social.url}
                    sx={{
                      color: "#fff",
                      p: 0,
                      fontSize: "1.2rem",
                      "&:hover": { color: "grey.500" },
                    }}
                  >
                    {socialIconMap[social.icon]}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ mt: 5, mb: 4, borderColor: "#1a1a1a" }} />

        {/* BOTTOM UTILITY BAR */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "1.2rem",
                letterSpacing: "-0.05em",
              }}
            >
              REBELS™
            </Typography>
            <Typography variant="caption" sx={{ color: "grey.800" }}>
              © 2026 ARCHIVE GLOBAL
            </Typography>
          </Stack>

          <Stack direction="row" spacing={4}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Typography
                key={item}
                variant="caption"
                sx={{
                  color: "grey.600",
                  cursor: "pointer",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
