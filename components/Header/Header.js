import { AppBar, Box, Container, InputAdornment, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CssTextField } from "./CustomTextBox";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "#0F1318" }}>
        <Toolbar>
          <Container>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Link href="/">
                  <Image src="/logo.svg" height="80px" width="100px" />
                </Link>
              </Box>
              <Box>
                <CssTextField
                  size="small"
                  placeholder="Search ..."
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
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
