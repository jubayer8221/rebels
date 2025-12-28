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
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NAV_ITEMS } from "../../config/navbar.config";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer}>
      <Image src="/image/logo.png" alt="REBELS" width={40} height={40} />
      <Typography
        variant="h6"
        sx={{ my: 2, textAlign: "center", fontWeight: 700 }}
      >
        REBELS
      </Typography>

      <List>
        {NAV_ITEMS.map((item) => (
          <ListItemButton
            key={item.id}
            component={Link}
            href={item.path}
            selected={pathname === item.path}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image
              src="/image/logo.png"
              alt="REBELS"
              width={40}
              height={40}
              priority
            />
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}
            >
              REBELS
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                component={Link}
                href={item.path}
                sx={{
                  color:
                    pathname === item.path ? "primary.main" : "text.primary",
                  fontWeight: pathname === item.path ? 600 : 400,
                  borderBottom: pathname === item.path ? "2px solid" : "none",
                  borderRadius: 0,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile / Tablet Menu Icon */}
          <IconButton
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
