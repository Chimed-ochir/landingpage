"use client";
import { Box, Button, Divider, Link, Stack, Text } from "@chakra-ui/react";
import "@vetixy/circular-std";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SideBar from "@/app/Components/SideBar/page";
import { FaArrowLeft } from "react-icons/fa";
export default function ProcessImprovement() {
  const path = usePathname();
  const router = useRouter();
  console.log("pathname", path);
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
          <Box w={"800px"} h={"1307.39px"}>
            <Stack h={"127px"} justifyContent={"space-between"}>
              <Stack
                h={"77px"}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box w={"480px"} h="77px">
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"500"}
                    fontSize={"48px"}
                    lineHeight={"76.8px"}
                    letterSpacing={"-0.96 px"}
                    color={"#E0E0E0"}
                  >
                    Process Improvement
                  </Text>
                </Box>

                <Button width={"162"} h={"48px"} color={"black"} bg={"white"}>
                  <Box pr={"5px"}>
                    <IoIosAddCircleOutline color="black" size="20" />
                  </Box>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"700"}
                    fontSize={"15px"}
                    lineHeight={"18px"}
                    color={"#141B22"}
                  >
                    New Proposal
                  </Text>
                </Button>
              </Stack>
              <Stack h={"18px"} direction={"row"}>
                <Box mt={"-1px"} w="73px">
                  <Text
                    fontWeight={"450px"}
                    fontSize={"15px"}
                    lineHeight={"18px"}
                    fontFamily={"CircularStd"}
                    color={"#E0E0E0"}
                  >
                    3 min read
                  </Text>
                </Box>
                <Divider
                  color={"#fff"}
                  orientation="vertical"
                  h={"12px"}
                  my={"auto"}
                />
                <Box mt={"-1px"} w="91px">
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450px"}
                    fontSize={"15px"}
                    lineHeight={"18px"}
                    color={"#E0E0E0"}
                  >
                    7 months ago
                  </Text>
                </Box>
                <Divider
                  color={"white"}
                  orientation="vertical"
                  h={"12px"}
                  my={"auto"}
                />
                <Box mt={"-1px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450px"}
                    fontSize={"15px"}
                    lineHeight={"18px"}
                  >
                    MongolNFT DAO
                  </Text>
                </Box>
              </Stack>
            </Stack>
            <Stack
              mx={"auto"}
              w="736px"
              // justifyContent={"space-evenly"}
              h={"1180.39px"}
            >
              <Stack
                h={"207.375px"}
                justifyContent={"space-between"}
                pt={"63.375px"}
                bg="black"
                id="what-is-pi"
              >
                <Link href="#what-is-pi">
                  <Box h="30px">
                    <Text
                      fontFamily={"CircularStd"}
                      fontWeight={"500"}
                      fontSize={"24px"}
                      lineHeight={"30px"}
                      color={"#E0E0E0"}
                    >
                      What is Process Improvement
                    </Text>
                  </Box>
                </Link>
                <Box w="736px" h={"90px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450"}
                    fontSize={"18px"}
                    lineHeight={"30px"}
                    color={"#949494"}
                  >
                    Process improvement proposals aim to enhance the efficiency
                    and effectiveness of our day to day operations. From
                    streamlining procedures to optimizing communication
                    channels, these proposals focus on making our operations and
                    DAO more streamlined and impactful.
                  </Text>
                </Box>
              </Stack>

              <Stack
                h={"207.375px"}
                // id="creating-new-proposal"
                justifyContent={"space-between"}
                pt={"63.375px"}
                id="collectibles"
                bg="black"
              >
                <Link href="#collectibles">
                  <Box h="30px">
                    <Text
                      fontFamily={"CircularStd"}
                      fontWeight={"500"}
                      fontSize={"24px"}
                      lineHeight={"30px"}
                      color={"#E0E0E0"}
                    >
                      Collectibles
                    </Text>
                  </Box>
                </Link>
                <Box w="755px" h={"90px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450"}
                    fontSize={"18px"}
                    lineHeight={"30px"}
                    color={"#949494"}
                  >
                    This category accepts proposals related to MongolNFT&#39;s
                    collectibles, including The Wolves, The Marals, and Beauty
                    Rabbit. It covers ideas for the roadmap, cooperation
                    opportunities, merchandise, and events associated with the
                    collectibles.
                  </Text>
                </Box>
              </Stack>
              <Stack
                h={"221.375px"}
                justifyContent={"space-between"}
                id="mongolnft-dao"
                pt={"63.375px"}
                bg="black"
              >
                <Link href="#mongolnft-dao">
                  <Box h="30px">
                    <Text
                      fontFamily={"CircularStd"}
                      fontWeight={"500"}
                      fontSize={"24px"}
                      lineHeight={"30px"}
                      color={"#E0E0E0"}
                    >
                      MongolNFT DAO
                    </Text>
                  </Box>
                </Link>

                <Box w="715px" h={"90px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450"}
                    fontSize={"18px"}
                    lineHeight={"30px"}
                    color={"#949494"}
                  >
                    In this section, process improvement proposals related to
                    the MongolNFT DAO itself are accepted. This includes
                    suggestions for enhancing governance, decision-making,
                    submission and discussion procedures, counsel selection, and
                    voting rules.
                  </Text>
                </Box>
              </Stack>
              <Stack
                h={"272.375px"}
                justifyContent={"space-between"}
                id="mongolnft-marketplace"
                pt={"63.375px"}
                bg="black"
              >
                <Link href="#mongolnft-marketplace">
                  <Box h="30px">
                    <Text
                      fontFamily={"CircularStd"}
                      fontWeight={"500"}
                      fontSize={"24px"}
                      lineHeight={"30px"}
                      color={"#E0E0E0"}
                    >
                      MongolNFT Marketplace
                    </Text>
                  </Box>
                </Link>

                <Box w="736px" h={"150px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450"}
                    fontSize={"18px"}
                    lineHeight={"30px"}
                    color={"#949494"}
                  >
                    This category accepts process improvement ideas specifically
                    related to the MongolNFT marketplace. Community members and
                    Management team can submit proposals for ideas and feature
                    updates that aim to enhance the functionality, user
                    experience, or overall performance of the marketplace. These
                    proposals can include suggestions for streamlining
                    processes, introducing new features, or improving existing
                    features. 
                  </Text>
                </Box>
              </Stack>
              <Stack h="273.134px" w="736px" py={"63.375px"}>
                <Stack
                  h="146.39px"
                  w="736px"
                  justifyContent={"flex-start"}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Button
                    h="82.39px"
                    w="360px"
                    color="#121212"
                    borderRadius={"8px"}
                    border="1px solid #292929"
                    onClick={() => {
                      router.push("/Rules/FundingAllocation");
                    }}
                    p="0px"
                  >
                    <Stack
                      w="360px"
                      justifyContent={"space-evenly"}
                      direction={"row"}
                      alignItems={"center"}
                      color="#121212"
                    >
                      <Box h={"32px"}>
                        <FaArrowLeft color="white" size="32" />
                      </Box>
                      <Box h={"50.39px"} w="280px">
                        <Box>
                          <Text
                            fontFamily={"CircularStd"}
                            fontWeight={"450"}
                            fontSize={"14px"}
                            lineHeight={"22.4px"}
                            color={"#D4D4D4"}
                            textAlign={"left"}
                          >
                            Previous
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={"CircularStd"}
                            fontWeight={"500"}
                            fontSize={"20px"}
                            lineHeight={"28px"}
                            color={"#FFFFFF"}
                            textAlign={"left"}
                          >
                            Funding Allocation
                          </Text>
                        </Box>
                      </Box>
                    </Stack>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
