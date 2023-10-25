"use client";
import { Button, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={() => toggleColorMode()}
      bg={"black"}
      w="66px"
      h="64px"
      borderRadius={"0"}
    >
      {colorMode === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
    </Button>
  );
};
export default ToggleColorMode;
