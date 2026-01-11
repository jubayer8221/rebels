import { Box, Stack, Typography } from "@mui/material";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack direction="row" sx={{ minHeight: "100vh" }}>
      {/* Visual Side */}
      <Box
        sx={{
          flex: 1.2,
          display: { xs: "none", md: "block" },
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ position: "absolute", bottom: 40, left: 40, color: "#fff" }}>
          <Typography variant="h1" sx={{ fontWeight: 900, lineHeight: 0.8 }}>
            REBELS
            <br />
            ARCHIVE
          </Typography>
          <Typography variant="overline" sx={{ letterSpacing: 8 }}>
            EST. 2024
          </Typography>
        </Box>
      </Box>

      {/* Form Side */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
