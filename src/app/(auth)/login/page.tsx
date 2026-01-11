"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  InputAdornment,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff, Google, Apple } from "@mui/icons-material";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ width: "100%", maxWidth: 400 }}>
      <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 950,
            textTransform: "uppercase",
            mb: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Login
        </Typography>
        <Typography variant="body2" sx={{ color: "grey.600" }}>
          Enter your archive credentials to continue.
        </Typography>
      </Box>

      <Stack spacing={2.5}>
        <TextField
          fullWidth
          label="EMAIL"
          variant="standard"
          placeholder="name@example.com"
          InputLabelProps={{
            shrink: true,
            sx: { fontWeight: 800, color: "#000" },
          }}
        />

        <TextField
          fullWidth
          label="PASSWORD"
          type={showPassword ? "text" : "password"}
          variant="standard"
          InputLabelProps={{
            shrink: true,
            sx: { fontWeight: 800, color: "#000" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography
            component={Link}
            href="/forgot-password"
            variant="caption"
            sx={{
              color: "grey.500",
              textDecoration: "none",
              "&:hover": { color: "#000" },
            }}
          >
            FORGOT PASSWORD?
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#000",
            color: "#fff",
            py: 2,
            borderRadius: 0,
            fontWeight: 900,
            "&:hover": { bgcolor: "#333" },
          }}
        >
          SIGN IN
        </Button>

        <Divider sx={{ my: 2 }}>
          <Typography variant="caption" sx={{ color: "grey.400" }}>
            OR
          </Typography>
        </Divider>

        <Stack direction="row" spacing={2}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={{
              borderRadius: 0,
              borderColor: "#eee",
              color: "#000",
              fontWeight: 700,
            }}
          >
            Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Apple />}
            sx={{
              borderRadius: 0,
              borderColor: "#eee",
              color: "#000",
              fontWeight: 700,
            }}
          >
            Apple
          </Button>
        </Stack>

        <Typography variant="body2" sx={{ textAlign: "center", mt: 4 }}>
          NEW TO REBELS?{" "}
          <Link
            href="/signup"
            style={{
              fontWeight: 900,
              color: "#000",
              textDecoration: "underline",
            }}
          >
            CREATE ACCOUNT
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
