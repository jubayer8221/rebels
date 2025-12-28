"use client";

import {
  Box,
  Typography,
  Link as MuiLink,
  IconButton,
  Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  QUICK_LINKS,
  SOCIAL_LINKS,
  SUPPORT_LINKS,
} from "../../config/footer.config";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

const socialIconMap: Record<string, JSX.Element> = {
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
};

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#111", color: "#fff", pt: 6, pb: 4 }}>
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 8 } }}>
        {/* Brand */}
        <Grid>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Image
              src="/image/rebels-logo.png"
              alt="REBELS"
              width={32}
              height={32}
            />
            <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
              REBELS
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
            Rebels is a modern men’s fashion brand designed for bold and
            confident men. Explore premium quality clothing curated just for
            you.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid>
          <Typography variant="subtitle1" fontWeight={600} mb={2}>
            Quick Links
          </Typography>
          {QUICK_LINKS.map((link) => (
            <Typography key={link.id} sx={{ mb: 1, fontSize: "0.9rem" }}>
              <MuiLink
                component={Link}
                href={link.path}
                underline="hover"
                color="inherit"
              >
                {link.label}
              </MuiLink>
            </Typography>
          ))}
        </Grid>

        {/* Support */}
        <Grid>
          <Typography variant="subtitle1" fontWeight={600} mb={2}>
            Support
          </Typography>
          {SUPPORT_LINKS.map((link) => (
            <Typography key={link.id} sx={{ mb: 1, fontSize: "0.9rem" }}>
              <MuiLink
                component={Link}
                href={link.path}
                underline="hover"
                color="inherit"
              >
                {link.label}
              </MuiLink>
            </Typography>
          ))}
        </Grid>

        {/* Social Media */}
        <Grid>
          <Typography variant="subtitle1" fontWeight={600} mb={2}>
            Follow Us
          </Typography>
          <Box>
            {SOCIAL_LINKS.map((social) => (
              <IconButton
                key={social.id}
                component="a"
                href={social.url}
                target="_blank"
                sx={{ color: "#fff" }}
              >
                {socialIconMap[social.icon]}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{ textAlign: "center", mt: 6, fontSize: "0.8rem", color: "#aaa" }}
      >
        © {new Date().getFullYear()} REBELS. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
