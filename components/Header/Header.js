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
                  <Image
                    src="/logo.svg"
                    height="80px"
                    width="100px"
                    style={{ cursor: "pointer" }}
                  />
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
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "white" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <Link href="/collections/0xc12be3fcD247Ead10ec28D69eD612D180B5b40B8">
                    <Typography sx={{ fontWeight: 700, cursor: "pointer" }}>
                      Collections
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, cursor: "pointer" }}>
                    Stats
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, cursor: "pointer" }}>
                    Create
                  </Typography>
                </Box>
                <Box>
                  <AccountCircleIcon sx={{ cursor: "pointer" }} />
                </Box>
                <Box>
                  <AccountBalanceWalletIcon sx={{ cursor: "pointer" }} />
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
