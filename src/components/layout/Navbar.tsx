"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  Collapse,
  Container,
  InputBase,
  Stack,
  Badge,
  Divider,
  alpha,
  LinearProgress,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import { LocationOn } from "@mui/icons-material";

// Mocking config for standalone use - replace with your import
const NAV_ITEMS = [
  { id: 1, label: "Home", path: "/" },
  {
    id: 2,
    label: "Shop",
    path: "/shop",
    children: [{ id: 21, label: "New Arrivals", path: "/shop/new" }],
  },
  { id: 3, label: "Collections", path: "/collections" },
  { id: 4, label: "About", path: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  // const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  // const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);
  const toggleCart = () => setCartOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: scrolled ? "rgba(255, 255, 255, 0.95)" : "#fff",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.3s ease-in-out",
          zIndex: 1201,
        }}
      >
        {/* 1. TOP BAR - Hidden on scroll for compactness */}
        <Collapse in={!scrolled}>
          <Box
            sx={{
              borderBottom: "1px solid #f0f0f0",
              py: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Container maxWidth="xl">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#666",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <Box component="span" sx={{ fontSize: "1rem" }}>
                    <LocationOn />
                  </Box>{" "}
                  Khilkhet, Dhaka, Bangladesh
                </Typography>
                <Stack direction="row" spacing={3} sx={{ color: "#666" }}>
                  <Typography
                    variant="caption"
                    sx={{ cursor: "pointer", "&:hover": { color: "#000" } }}
                  >
                    ENG ⌵
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ cursor: "pointer", "&:hover": { color: "#000" } }}
                  >
                    USD ⌵
                  </Typography>
                  <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
                  <Typography
                    variant="caption"
                    sx={{ cursor: "pointer", fontWeight: 700, color: "#000" }}
                  >
                    Sign Up / Log In
                  </Typography>
                </Stack>
              </Stack>
            </Container>
          </Box>
        </Collapse>

        {/* 2. MIDDLE BAR */}
        {/* 2. MIDDLE BAR */}
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: scrolled ? 70 : 90,
              transition: "all 0.3s ease",
              display: "grid",
              // Three columns: [Logo] [Search] [Actions]
              gridTemplateColumns: {
                xs: "auto 1fr auto",
                md: "1fr 2fr 1fr",
              },
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* LEFT: Logo Section */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                color: "#000",
                justifyContent: "flex-start", // Aligns logo to the left of its column
              }}
            >
              <Box
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "rotate(-10deg)" },
                }}
              >
                <Image
                  src="/image/logo.png"
                  alt="REBELS"
                  width={32}
                  height={32}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  display: { xs: scrolled ? "none" : "block", sm: "block" },
                }}
              >
                REBELS
              </Typography>
            </Box>

            {/* CENTER: Search Bar Section */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center", // Ensures the search box is centered in the middle column
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  bgcolor: "#f5f5f5",
                  borderRadius: "50px",
                  overflow: "hidden",
                  height: 48,
                  width: "100%",
                  maxWidth: 500, // Limits width so it doesn't get too huge on wide screens
                  transition: "all 0.3s ease",
                  border: "1px solid transparent",
                  "&:focus-within": {
                    bgcolor: "#fff",
                    borderColor: "#000",
                    boxShadow: "0 0 0 4px rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2.5,
                    flexGrow: 1,
                  }}
                >
                  <SearchIcon sx={{ color: "#999", fontSize: 20, mr: 1.5 }} />
                  <InputBase
                    placeholder="Search the rebellion..."
                    fullWidth
                    sx={{ fontSize: "0.95rem", fontWeight: 500 }}
                  />
                </Box>
                <Button
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    px: 4,
                    borderRadius: 0,
                    fontWeight: 700,
                    "&:hover": { bgcolor: "#333" },
                  }}
                >
                  SEARCH
                </Button>
              </Box>
            </Box>

            {/* RIGHT: Actions Section */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="flex-end" // Aligns icons to the right of its column
            >
              <IconButton
                sx={{
                  color: "#000",
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                <Badge badgeContent={0} color="primary">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>

              <Box
                onClick={toggleCart}
                sx={{
                  display: "flex",
                  color: "black",
                  alignItems: "center",
                  gap: 1.5,
                  cursor: "pointer",
                  ml: 1,
                  p: 1,
                  borderRadius: "12px",
                  transition: "background 0.2s",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                }}
              >
                <Badge
                  badgeContent={2}
                  sx={{
                    "& .MuiBadge-badge": { bgcolor: "#000", color: "#fff" },
                  }}
                >
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: 26, color: "#000" }}
                  />
                </Badge>
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      color: "black",
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    Cart
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    $90.00
                  </Typography>
                </Box>
              </Box>

              <IconButton
                onClick={toggleDrawer}
                sx={{ display: { md: "none" }, color: "#000", ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>

        {/* 3. MAIN NAVIGATION BAR */}
        <Box sx={{ bgcolor: "#000", display: { xs: "none", md: "block" } }}>
          <Container maxWidth="xl">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ height: 50 }}
            >
              <Stack direction="row" spacing={1}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.id}
                    component={Link}
                    href={item.path}
                    endIcon={
                      item.children ? (
                        <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
                      ) : null
                    }
                    sx={{
                      color:
                        pathname === item.path
                          ? "#fff"
                          : "rgba(255,255,255,0.7)",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      px: 2,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 8,
                        left: "20%",
                        width: pathname === item.path ? "60%" : "0%",
                        height: "2px",
                        bgcolor: "#fff",
                        transition: "0.3s ease",
                      },
                      "&:hover": {
                        color: "#fff",
                        "&::after": { width: "60%" },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ color: "#fff" }}
              >
                <PhoneInTalkIcon
                  sx={{ fontSize: 18, color: alpha("#fff", 0.7) }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, fontSize: "0.85rem" }}
                >
                  +880 1234 567 890
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </AppBar>

      {/* Spacing Offset */}
      <Box
        sx={{
          height: { xs: 70, md: scrolled ? 120 : 140 },
          transition: "0.3s",
        }}
      />

      {/* 4. SHOPPING CART DRAWER */}
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={toggleCart}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 400 },
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 900 }}>
            YOUR BAG (2)
          </Typography>
          <IconButton onClick={toggleCart}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Progress for Free Shipping */}
        <Box sx={{ px: 3, mb: 2 }}>
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, mb: 1, display: "block" }}
          >
            Spend $10.00 more for{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              FREE SHIPPING
            </Box>
          </Typography>
          <LinearProgress
            variant="determinate"
            value={90}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: "#eee",
              "& .MuiLinearProgress-bar": { bgcolor: "#000" },
            }}
          />
        </Box>

        <Divider />

        <Box sx={{ flexGrow: 1, overflowY: "auto", p: 3 }}>
          <Stack spacing={3}>
            {[1, 2].map((item) => (
              <Box key={item} sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    width: 90,
                    height: 110,
                    bgcolor: "#f9f9f9",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="https://via.placeholder.com/90x110"
                    alt="product"
                    width={90}
                    height={110}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    sx={{ fontWeight: 800, fontSize: "0.85rem", mb: 0.5 }}
                  >
                    PREMIUM REBEL TEE
                  </Typography>
                  <Typography
                    sx={{ color: "#777", fontSize: "0.75rem", mb: 1.5 }}
                  >
                    Size: L | Color: Pitch Black
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography sx={{ fontWeight: 900 }}>$45.00</Typography>
                    <IconButton size="small" sx={{ border: "1px solid #eee" }}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box sx={{ p: 3, borderTop: "1px solid #eee", bgcolor: "#fff" }}>
          <Stack direction="row" justifyContent="space-between" mb={3}>
            <Typography sx={{ fontWeight: 700 }}>SUBTOTAL</Typography>
            <Typography sx={{ fontWeight: 900, fontSize: "1.2rem" }}>
              $90.00
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "#000",
                color: "#000",
                py: 1.5,
                fontWeight: 700,
                borderRadius: "4px",
              }}
            >
              VIEW CART
            </Button>
            <Button
              fullWidth
              sx={{
                bgcolor: "#000",
                color: "#fff",
                py: 2,
                fontWeight: 900,
                borderRadius: "4px",
                "&:hover": { bgcolor: "#333" },
              }}
            >
              CHECKOUT NOW
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* 5. MOBILE MENU (Full Screen Overlay) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: "100%", bgcolor: "#000", color: "#fff" } }}
      >
        <Container sx={{ py: 4 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={8}
          >
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              REBELS
            </Typography>
            <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Stack>

          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.id}
                sx={{ py: 2 }}
                onClick={toggleDrawer}
                component={Link}
                href={item.path}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 900, textTransform: "uppercase" }}
                >
                  {item.label}
                </Typography>
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ mt: 10 }}>
            <Typography
              variant="overline"
              sx={{ color: "rgba(255,255,255,0.5)" }}
            >
              Contact
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              support@rebels.com
            </Typography>
            <Stack direction="row" spacing={4}>
              {["IG", "FB", "TW"].map((s) => (
                <Typography
                  key={s}
                  sx={{ fontWeight: 900, borderBottom: "2px solid #fff" }}
                >
                  {s}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Container>
      </Drawer>
    </>
  );
};

export default Navbar;
