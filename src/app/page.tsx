"use client";
import { Stack, Text, Box, Button } from "@chakra-ui/react";
import HomeHead from "./pages/Home/Head/page";
import Discussions from "./pages/Home/discussions/page";
import Active from "./pages/Home/active/page";

import { useState } from "react";

export default function Home() {
  return (
    <Box pt={"84px"}>
      <HomeHead />
      <Discussions />
      <Active />
    </Box>
  );
}
