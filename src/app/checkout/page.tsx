"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Link as MuiLink,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Money } from "@mui/icons-material";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: 10, minWidth: "xl" }}>
      {/* MINIMALIST HEADER */}
      <Box sx={{ py: 1, borderBottom: "1px solid #eee", mb: 6 }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 900, letterSpacing: "-0.05em" }}
            >
              REBELS
            </Typography>
            <MuiLink
              component={Link}
              href="/"
              sx={{
                color: "#000",
                display: "flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 10 }} /> RETURN TO SHOP
            </MuiLink>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 10 },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT: FORM SECTION */}
          <Box sx={{ flex: 1.2, width: "100%" }}>
            <Stack spacing={6}>
              {/* CONTACT */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    mb: 3,
                    fontSize: "1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  CONTACT INFORMATION
                </Typography>
                <TextField
                  fullWidth
                  label="Email"
                  variant="standard"
                  placeholder="rebel@clothing.com"
                />
              </Box>

              {/* SHIPPING */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    mb: 3,
                    fontSize: "1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  SHIPPING ADDRESS
                </Typography>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="standard"
                    />
                    <TextField fullWidth label="Last Name" variant="standard" />
                  </Stack>
                  <TextField fullWidth label="Address" variant="standard" />
                  <Stack direction="row" spacing={2}>
                    <TextField fullWidth label="City" variant="standard" />
                    <TextField fullWidth label="ZIP code" variant="standard" />
                  </Stack>
                </Stack>
              </Box>

              {/* PAYMENT SECTION WITH IMAGES & ICONS */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    mb: 1,
                    fontSize: "1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  PAYMENT METHOD
                </Typography>
                <Typography variant="body2" sx={{ color: "#777", mb: 3 }}>
                  All transactions are secure and encrypted.
                </Typography>

                <FormControl fullWidth>
                  <RadioGroup
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <Stack spacing={2}>
                      {/* CREDIT CARD OPTION */}
                      <Box
                        sx={{
                          border:
                            paymentMethod === "card"
                              ? "2px solid #000"
                              : "1px solid #eee",
                          p: 2,
                          transition: "0.2s",
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <FormControlLabel
                            value="card"
                            control={<Radio color="default" />}
                            label={
                              <Typography sx={{ fontWeight: 700 }}>
                                Credit Card
                              </Typography>
                            }
                          />
                          <Stack direction="row" spacing={1}>
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                              alt="Visa"
                              width="35"
                              height="55"
                            />
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                              alt="Mastercard"
                              width="30"
                              height="50"
                            />
                          </Stack>
                        </Stack>

                        {paymentMethod === "card" && (
                          <Stack
                            spacing={3}
                            sx={{ mt: 3, pt: 3, borderTop: "1px solid #eee" }}
                          >
                            <TextField
                              fullWidth
                              label="Card Number"
                              variant="standard"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CreditCardIcon fontSize="small" />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Stack direction="row" spacing={2}>
                              <TextField
                                fullWidth
                                label="Expiry"
                                variant="standard"
                                placeholder="MM/YY"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <CalendarMonthIcon fontSize="small" />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <TextField
                                fullWidth
                                label="CVV"
                                variant="standard"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockIcon fontSize="small" />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Stack>
                          </Stack>
                        )}
                      </Box>

                      {/* PAYPAL OPTION */}
                      <Box
                        sx={{
                          border:
                            paymentMethod === "paypal"
                              ? "2px solid #000"
                              : "1px solid #eee",
                          px: 2,
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <FormControlLabel
                            value="paypal"
                            control={<Radio color="default" />}
                            label={
                              <Typography sx={{ fontWeight: 700 }}>
                                PayPal
                              </Typography>
                            }
                          />
                          <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                            alt="PayPal"
                            width="70"
                            height="70"
                          />
                        </Stack>
                      </Box>

                      {/* APPLE PAY / GOOGLE PAY OPTION */}
                      <Box
                        sx={{
                          border:
                            paymentMethod === "digital"
                              ? "2px solid #000"
                              : "1px solid #eee",
                          p: 2,
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <FormControlLabel
                            value="digital"
                            control={<Radio color="default" />}
                            label={
                              <Typography sx={{ fontWeight: 700 }}>
                                Digital Wallet
                              </Typography>
                            }
                          />
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Typography
                              sx={{ fontWeight: 900, fontSize: "0.9rem" }}
                            >
                              Apple Pay
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>

                      {/* BANK TRANSFER */}
                      <Box
                        sx={{
                          border:
                            paymentMethod === "bank"
                              ? "2px solid #000"
                              : "1px solid #eee",
                          p: 2,
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <FormControlLabel
                            value="bank"
                            control={<Radio color="default" />}
                            label={
                              <Typography sx={{ fontWeight: 700 }}>
                                Bank Transfer
                              </Typography>
                            }
                          />
                          <AccountBalanceIcon sx={{ color: "#777" }} />
                        </Stack>
                      </Box>

                      {/* BANK TRANSFER */}
                      <Box
                        sx={{
                          border:
                            paymentMethod === "cash"
                              ? "2px solid #000"
                              : "1px solid #eee",
                          p: 2,
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <FormControlLabel
                            value="cash"
                            control={<Radio color="default" />}
                            label={
                              <Typography sx={{ fontWeight: 700 }}>
                                Cash on Delivery
                              </Typography>
                            }
                          />
                          <Money sx={{ color: "#777" }} />
                        </Stack>
                      </Box>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Box>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  py: 2.5,
                  fontWeight: 900,
                  borderRadius: 0,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  "&:hover": { bgcolor: "#333" },
                }}
              >
                COMPLETE PURCHASE
              </Button>
            </Stack>
          </Box>

          {/* RIGHT: SUMMARY SECTION */}
          <Box
            sx={{
              flex: 0.8,
              width: "100%",
              bgcolor: "#f9f9f9",
              p: { xs: 3, md: 5 },
              position: { md: "sticky" },
              top: 100,
              border: "1px solid #eee",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 900, mb: 4, fontSize: "1rem" }}
            >
              ORDER SUMMARY
            </Typography>

            <Stack spacing={3} sx={{ mb: 4 }}>
              {[1, 2].map((i) => (
                <Stack
                  key={i}
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 80,
                        bgcolor: "#ddd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 800 }}>
                        IMG
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: "0.8rem",
                          textTransform: "uppercase",
                        }}
                      >
                        REBEL ARCHIVE TEE v{i}
                      </Typography>
                      <Typography sx={{ color: "#888", fontSize: "0.7rem" }}>
                        Size: XL / Black
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "0.8rem" }}>
                    $45.00
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Divider sx={{ my: 3 }} />

            {/* PROMO CODE FIELD */}
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                placeholder="PROMO CODE"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalActivityIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <Button
                      sx={{ color: "#000", fontWeight: 900, minWidth: "auto" }}
                    >
                      APPLY
                    </Button>
                  ),
                }}
              />
            </Box>

            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                  Subtotal
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  $90.00
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                  Shipping
                </Typography>
                <Typography
                  sx={{ fontSize: "0.85rem", color: "green", fontWeight: 700 }}
                >
                  FREE
                </Typography>
              </Stack>
              <Divider sx={{ my: 1 }} />
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontWeight: 900, fontSize: "1.1rem" }}>
                  TOTAL
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  $90.00
                </Typography>
              </Stack>
            </Stack>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
                opacity: 0.5,
              }}
            >
              <LockIcon sx={{ fontSize: 14 }} />
              <Typography sx={{ fontSize: "0.65rem", fontWeight: 800 }}>
                SECURE SSL ENCRYPTION
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CheckoutPage;
