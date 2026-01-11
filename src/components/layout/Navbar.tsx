"use client";

import React, { useState } from "react";
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
  Fade,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NAV_ITEMS } from "../../config/navbar.config";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);
  const toggleSearch = () => setSearchOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(15px)",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", height: 80 }}
          >
            {/* 1. BRAND LOGO */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Image
                src="/image/logo.png"
                alt="REBELS"
                width={32}
                height={32}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  fontSize: "1.5rem",
                }}
              >
                REBELS
              </Typography>
            </Box>

            {/* 2. DESKTOP MENU */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    position: "relative",
                    "&:hover .dropdown": { display: "block" },
                  }}
                >
                  <Button
                    component={Link}
                    href={item.path}
                    endIcon={
                      item.children ? (
                        <KeyboardArrowDownIcon sx={{ fontSize: 14 }} />
                      ) : null
                    }
                    sx={{
                      color:
                        pathname.startsWith(item.path) && item.path !== "/"
                          ? "#000"
                          : "#555",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.15em",
                      px: 2,
                      "&:hover": { bgcolor: "transparent", color: "#000" },
                    }}
                  >
                    {item.label}
                  </Button>
                  {item.children && (
                    <Box
                      className="dropdown"
                      sx={{
                        display: "none",
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        bgcolor: "#fff",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                        minWidth: 220,
                        py: 2,
                        border: "1px solid #eee",
                      }}
                    >
                      {item.children.map((child) => (
                        <Button
                          key={child.id}
                          component={Link}
                          href={child.path}
                          fullWidth
                          sx={{
                            justifyContent: "flex-start",
                            px: 3,
                            py: 1.5,
                            color: "#666",
                            fontSize: "0.75rem",
                            "&:hover": { bgcolor: "#f5f5f5", color: "#000" },
                          }}
                        >
                          {child.label}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* 3. SEARCH & ACTIONS */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Expanding Search Bar */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: searchOpen ? "#f5f5f5" : "transparent",
                  borderRadius: "20px",
                  px: searchOpen ? 2 : 0,
                  transition: "all 0.3s ease",
                  width: searchOpen ? { xs: "150px", sm: "250px" } : "40px",
                  overflow: "hidden",
                }}
              >
                <IconButton onClick={toggleSearch} size="small">
                  <SearchIcon sx={{ color: "#000" }} />
                </IconButton>
                <InputBase
                  placeholder="SEARCH..."
                  sx={{
                    ml: 1,
                    flex: 1,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    display: searchOpen ? "block" : "none",
                  }}
                />
              </Box>

              <IconButton
                onClick={toggleDrawer}
                sx={{ display: { xs: "flex", md: "none" }, color: "#000" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* 4. FULL SCREEN MODERN MOBILE MENU */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={toggleDrawer}
        transitionDuration={400}
        PaperProps={{
          sx: {
            height: "100vh",
            width: "100vw",
            // Semi-transparent black with heavy blur
            bgcolor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(20px)",
            color: "#fff",
            p: 4,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Mobile Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Image
              src="/image/logo.png"
              alt="REBELS"
              width={28}
              height={28}
              style={{ filter: "invert(1)" }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 900, letterSpacing: "-0.05em" }}
            >
              REBELS
            </Typography>
          </Box>
          <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
            <CloseIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Box>

        {/* Navigation Links - Scaled Down for Elegance */}
        <List disablePadding sx={{ flexGrow: 1 }}>
          {NAV_ITEMS.map((item, index) => (
            <Fade
              in={mobileOpen}
              style={{ transitionDelay: `${index * 40}ms` }}
              key={item.id}
            >
              <Box>
                <ListItemButton
                  onClick={
                    item.children
                      ? () =>
                          setOpenSubMenu(
                            openSubMenu === item.id ? null : item.id
                          )
                      : toggleDrawer
                  }
                  component={item.children ? "div" : Link}
                  href={item.children ? undefined : item.path}
                  sx={{
                    py: 2.5,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    "&:hover": { bgcolor: "transparent" },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      textTransform: "uppercase",
                      fontSize: "1.75rem", // Balanced size
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.label}
                  </Typography>
                  {item.children && (
                    <KeyboardArrowDownIcon
                      sx={{
                        ml: "auto",
                        transform:
                          openSubMenu === item.id ? "rotate(180deg)" : "none",
                        transition: "0.3s",
                      }}
                    />
                  )}
                </ListItemButton>

                {/* Nested Category Links */}
                <Collapse in={openSubMenu === item.id}>
                  <Box
                    sx={{
                      py: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2.5,
                    }}
                  >
                    {item.children?.map((child) => (
                      <Typography
                        key={child.id}
                        component={Link}
                        href={child.path}
                        onClick={toggleDrawer}
                        sx={{
                          pl: 1,
                          color: "rgba(255,255,255,0.6)",
                          textDecoration: "none",
                          fontSize: "1rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          transition: "0.2s",
                          "&:hover": { color: "#fff" },
                        }}
                      >
                        — {child.label}
                      </Typography>
                    ))}
                  </Box>
                </Collapse>
              </Box>
            </Fade>
          ))}
        </List>

        {/* Footer Info / Socials */}
        <Box sx={{ mt: "auto", pb: 4 }}>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.2em",
              mb: 2,
              display: "block",
            }}
          >
            CONNECT WITH US
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Instagram", "TikTok", "Youtube"].map((social) => (
              <Typography
                key={social}
                variant="button"
                sx={{
                  fontWeight: 900,
                  fontSize: "0.7rem",
                  color: "#fff",
                  borderBottom: "1px solid #fff",
                  pb: 0.5,
                }}
              >
                {social}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Drawer>

      <Toolbar sx={{ height: 80 }} />
    </>
  );
};

export default Navbar;
