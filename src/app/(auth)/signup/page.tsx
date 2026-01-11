"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Link from "next/link";

export default function SignupPage() {
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
          Join Us
        </Typography>
        <Typography variant="body2" sx={{ color: "grey.600" }}>
          Create an account for early drop access and tracking.
        </Typography>
      </Box>

      <Stack spacing={2.5}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            fullWidth
            label="FIRST NAME"
            variant="standard"
            InputLabelProps={{
              shrink: true,
              sx: { fontWeight: 800, color: "#000" },
            }}
          />
          <TextField
            fullWidth
            label="LAST NAME"
            variant="standard"
            InputLabelProps={{
              shrink: true,
              sx: { fontWeight: 800, color: "#000" },
            }}
          />
        </Stack>

        <TextField
          fullWidth
          label="EMAIL ADDRESS"
          variant="standard"
          InputLabelProps={{
            shrink: true,
            sx: { fontWeight: 800, color: "#000" },
          }}
        />

        <TextField
          fullWidth
          label="PASSWORD"
          type="password"
          variant="standard"
          InputLabelProps={{
            shrink: true,
            sx: { fontWeight: 800, color: "#000" },
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              size="small"
              sx={{ "&.Mui-checked": { color: "#000" } }}
            />
          }
          label={
            <Typography variant="caption" sx={{ color: "grey.600" }}>
              I agree to the Terms of Service and Privacy Policy.
            </Typography>
          }
        />

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
          CREATE ACCOUNT
        </Button>

        <Typography variant="body2" sx={{ textAlign: "center", mt: 4 }}>
          ALREADY A MEMBER?{" "}
          <Link
            href="/login"
            style={{
              fontWeight: 900,
              color: "#000",
              textDecoration: "underline",
            }}
          >
            LOGIN
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
