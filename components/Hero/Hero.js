import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Box>
      <Box
      // sx={{
      //   backgroundColor: "rgba(0, 0, 0, 0.77)",
      //   backgroundBlendMode: "darken",
      // }}
      >
        <Image
          src="/banner.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ zIndex: 1, position: "relative" }}>
          <Toolbar />
          <Toolbar />
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 6vw,4rem)",
                }}
              >
                Discover, Collect, and sell extraordinary NFTs
              </Typography>
              <Box>
                <Button
                  sx={{
                    backgroundColor: "#000",
                    color: "white",
                    "&:hover": { backgroundColor: "black" },
                  }}
                >
                  Explore
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#000",
                    color: "white",
                    ml: "15px",
                    "&:hover": { backgroundColor: "black" },
                  }}
                >
                  Create
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
