"use client";
import { Button, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={() => toggleColorMode()} bg={"black"}>
      {colorMode === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
    </Button>
  );
};
export default ToggleColorMode;
