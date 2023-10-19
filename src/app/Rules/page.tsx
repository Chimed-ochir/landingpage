import { Stack, Text } from "@chakra-ui/react";
import SideBar from "../Components/SideBar/page";
import GetStarted from "../Components/Rules/GetStarted/page";

export default function Rules() {
  return (
    <Stack direction={"row"} mx={{ base: "auto", "2xl": "41px" }}>
      <SideBar />
      <Stack
        // ml={"-8px"}
        w="1184px"
        ml={"-9px"}
        mr={{ base: "-201px", "2xl": "-233px" }}
        mt={"60px"}
      >
        <Stack mx={"auto"}>
          <GetStarted />
        </Stack>
      </Stack>
    </Stack>
  );
}
