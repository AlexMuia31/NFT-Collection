import {
  AppBar,
  Box,
  Container,
  InputAdornment,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CssTextField } from "./CustomTextBox";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Header = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "#0F1318" }}>
        <Toolbar>
          <Container maxWidth="xl">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flex: 0.2 }}>
                <Link href="/">
                  <Image src="/logo.svg" height="80px" width="100px" />
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flex: 0.8,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "45%" }}>
                  <CssTextField
                    fullWidth
                    size="small"
                    placeholder="Search items, collections , and accounts"
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          color: "#0FE9EF",
                        },
                        color: "#fff",
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon sx={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>Collections</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>Stats</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>Create</Typography>
                </Box>
                <Box>
                  <AccountCircleIcon />
                </Box>
                <Box>
                  <AccountBalanceWalletIcon />
                </Box>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
