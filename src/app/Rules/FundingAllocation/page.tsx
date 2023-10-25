"use client";
import SideBar from "@/app/Components/SideBar/page";
import { Box, Button, Divider, Link, Stack, Text } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function FundingAllocation() {
  const router = useRouter();
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
          <Box w={"800px"} h={"1303.255px"}>
            <Stack h={"127px"} justifyContent={"space-between"}>
              <Stack
                h={"127px"}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box w={"420px"} h="77px">
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"500"}
                    fontSize={"48px"}
                    lineHeight={"76.8px"}
                    letterSpacing={"-0.96 px"}
                    color={"#E0E0E0"}
                  >
                    Funding Allocation
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
                    2 min read
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
              justifyContent={"space-evenly"}
              h={"1176.255px"}
            >
              <Stack
                h={"243.372px"}
                // justifyContent={"space-between"}
                pt={"63.375px"}
                id="whats-the-funding-allocation"
              >
                <Link href="#whats-the-funding-allocation">
                  <Box h="30px">
                    <Text
                      fontFamily={"CircularStd"}
                      fontWeight={"500"}
                      fontSize={"24px"}
                      lineHeight={"30px"}
                      color={"#E0E0E0"}
                    >
                      What is Funding Allocation
                    </Text>
                  </Box>
                </Link>
                <Box w="736px" h={"120px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450"}
                    fontSize={"18px"}
                    lineHeight={"30px"}
                    color={"#949494"}
                  >
                    We&#39;ve allocated 10 billion MNFT or an equivalent fiat
                    amount to fund projects and initiatives that drive the
                    growth of our ecosystem. This dedicated fund is designed to
                    support innovative endeavors, propel new initiatives, and
                    foster the expansion of our vibrant community.
                  </Text>
                </Box>
              </Stack>

              <Stack
                h={"385.372px"}
                // id="creating-new-proposal"
                justifyContent={"space-between"}
                pt={"63.375px"}
                id="request-funding"
              >
                <Link href="#request-funding">
                  <Box h="30px">
                    <Text
                      fontFamily={"CircularStd"}
                      fontWeight={"500"}
                      fontSize={"24px"}
                      lineHeight={"30px"}
                      color={"#E0E0E0"}
                    >
                      Request Funding
                    </Text>
                  </Box>
                </Link>
                <Box w="755px" h={"180px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450"}
                    fontSize={"18px"}
                    lineHeight={"30px"}
                    color={"#949494"}
                  >
                    In this proposal category, funding proposals can be
                    submitted by the community, requesting either MNFT coins or
                    fiat money. Community members who have ideas or projects
                    that require financial support can submit their proposals
                    for consideration. These proposals should outline how the
                    project contributes to the growth and development of our
                    ecosystem. They should clearly state the financial support
                    needed from the community to implement the project
                    successfully.
                  </Text>
                </Box>
                <Box w="736px" h={"150px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"450"}
                    fontSize={"18px"}
                    lineHeight={"30px"}
                    color={"#949494"}
                  >
                    Additionally, the management team can create proposals to
                    allocate MNFT coins to specific projects. 
                  </Text>
                </Box>
              </Stack>

              <Stack
                h={"274.372px"}
                justifyContent={"space-between"}
                id="partnership-request"
                pt={"63.375px"}
              >
                <Link href="#partnership-request">
                  <Box h="30px">
                    <Text
                      fontFamily={"CircularStd"}
                      fontWeight={"500"}
                      fontSize={"24px"}
                      lineHeight={"30px"}
                      color={"#E0E0E0"}
                    >
                      Partnership Request
                    </Text>
                  </Box>
                </Link>
                <Stack>
                  <Stack
                    w="736px"
                    h={"157px"}
                    direction="row"
                    justifyContent={"space-between"}
                  >
                    <Box w="715px" h={"157px"}>
                      <Text
                        fontFamily={"CircularStd"}
                        fontWeight={"450"}
                        fontSize={"18px"}
                        lineHeight={"30px"}
                        color={"#949494"}
                      >
                        Community members who have projects ready to integrate
                        into our ecosystem or are planning to develop projects
                        that require collaboration with the management and
                        development teams can submit proposals in this category.
                        These proposals should outline the details of the
                        project, its integration or collaboration requirements,
                        and the potential benefits it brings to the ecosystem.
                      </Text>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>

              <Stack h="273.134px" w="736px" py={"63.375px"}>
                <Stack
                  h="146.39px"
                  w="736px"
                  justifyContent={"space-between"}
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
                      router.push("/Rules");
                    }}
                    p="0px"
                  >
                    <Stack
                      justifyContent={"space-evenly"}
                      direction={"row"}
                      alignItems={"center"}
                      color="#121212"
                      w="360px"
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
                            Getting started
                          </Text>
                        </Box>
                      </Box>
                    </Stack>
                  </Button>
                  <Button
                    h="82.39px"
                    w="360px"
                    color="#121212"
                    borderRadius={"8px"}
                    border="1px solid #292929"
                    onClick={() => {
                      router.push("/Rules/ProcessImprovement");
                    }}
                    p="0px"
                  >
                    <Stack
                      h="82.39px"
                      w="360px"
                      justifyContent={"space-evenly"}
                      direction={"row"}
                      alignItems={"center"}
                      color="#121212"
                    >
                      <Box h={"50.39px"} w="280px">
                        <Box>
                          <Text
                            fontFamily={"CircularStd"}
                            fontWeight={"450"}
                            fontSize={"14px"}
                            lineHeight={"22.4px"}
                            color={"#D4D4D4"}
                            textAlign={"right"}
                          >
                            Next
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            fontFamily={"CircularStd"}
                            fontWeight={"500"}
                            fontSize={"20px"}
                            lineHeight={"28px"}
                            color={"#FFFFFF"}
                            textAlign={"right"}
                          >
                            Process Improvement
                          </Text>
                        </Box>
                      </Box>
                      <Box h={"32px"}>
                        <FaArrowRight color="white" size={32} />
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
