import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import React from "react";

const Home: NextPage = () => {
  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
