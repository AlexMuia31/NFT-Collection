import React from "react";
import { useRouter } from "next/router";
import { Box, Toolbar, Typography } from "@mui/material";

const Collection = () => {
  const router = useRouter();
  console.log(router.query);
  console.log(router.query.collectionId);
  return (
    <Box>
      <Toolbar />
      <Toolbar />
      <Typography>{router.query.collectionId}</Typography>
    </Box>
  );
};

export default Collection;
