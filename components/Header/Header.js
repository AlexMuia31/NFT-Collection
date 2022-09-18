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
import React, { useEffect } from "react";
import { CssTextField } from "./CustomTextBox";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Header = () => {
  const address = useAddress();
  // adding users to the database when they connect
  // This is an immediately invoked functional expression
  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        _userName: "Unnamed",
        walletAddress: address,
      };
      const result = await client.createIfNotExists(userDoc);
    })();
  }, [address]);

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
                  <ConnectWallet accentColor="#f213a4" colorMode="dark" />
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
