"use client";
import { Stack, Text } from "@chakra-ui/react";
import SideBar from "../Components/SideBar/page";
import GetStarted from "./GetStarted/page";
import { useParams } from "next/navigation";
import FundingAllocation from "./FundingAllocation/page";

export default function Rules() {
  const { tag } = useParams();
  const param = useParams();
  console.log("tag", tag);
  console.log("param", param);
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
