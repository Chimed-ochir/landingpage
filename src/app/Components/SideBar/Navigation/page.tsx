"use client";
import { Box, Flex, Stack, Text, Button, Link } from "@chakra-ui/react";
import "@vetixy/circular-std";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function NavigationSideBar() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [idx, setIdx] = useState(0);
  const [fragmentIdentifier, setFragmentIdentifier] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Function to handle changes in the URL hash
    console.log("898989", window.location.pathname);
    const handleHashChange = () => {
      const fragment = window.location.hash;
      const newFragmentIdentifier = fragment.substring(1);
      // Update the state with the new fragment identifier
      setFragmentIdentifier(newFragmentIdentifier);
    };

    // Add an event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initial call to set the fragment on the first render
    handleHashChange();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const host = () => {
    if (pathname === "/Rules") {
      console.log("scroll");
      const handleScroll = () => {
        const scrollY = window.scrollY;
        let newIdx = 0;

        if (scrollY >= 2071) {
          newIdx = 1;
        } else if (scrollY >= 1531) {
          newIdx = 2;
        } else if (scrollY >= 1022) {
          newIdx = 3;
        } else if (scrollY >= 652) {
          newIdx = 4;
        }

        if (newIdx !== idx) {
          setIdx(newIdx);
          console.log("id", newIdx);
        }
      };

      // Attach the event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else if (pathname === "/Rules/FundingAllocation") {
      console.log("scroll111");
      const handleScroll1 = () => {
        const scrollY = window.scrollY;
        let newIdx = 0;

        if (scrollY >= 841) {
          newIdx = 5;
        } else if (scrollY >= 491) {
          newIdx = 6;
        } else if (scrollY >= 251) {
          newIdx = 7;
        }

        if (newIdx !== idx) {
          setIdx(newIdx);
          console.log("id", newIdx);
        }
      };
      // Attach the event listener
      window.addEventListener("scroll", handleScroll1);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll1);
      };
    } else if (pathname === "/Rules/ProcessImprovement") {
      console.log("scroll222");
      const handleScroll2 = () => {
        const scrollY = window.scrollY;
        let newIdx = 0;

        if (scrollY >= 845) {
          newIdx = 8;
        } else if (scrollY >= 667) {
          newIdx = 9;
        } else if (scrollY >= 459) {
          newIdx = 10;
        } else if (scrollY >= 78) {
          newIdx = 11;
        }

        if (newIdx !== idx) {
          setIdx(newIdx);
          console.log("id", newIdx);
        }
      };

      // Attach the event listener
      window.addEventListener("scroll", handleScroll2);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll2);
      };
    }
  };
  useEffect(() => {
    host();
  }, [idx]);

  useEffect(() => {
    // Check the fragment identifier and perform actions based on it
    console.log("The fragment:", fragmentIdentifier);
  }, [fragmentIdentifier]);

  return (
    <Box
      h={"461px"}
      w={"256px"}
      zIndex={1}
      position="fixed"
      left="0"
      ml={"15px"}
      borderRight={"1px solid #292929"}
    >
      <Stack pt={"32px"}>
        <Stack h={pathname === "/Rules" ? "198px" : "32px"}>
          <Flex h={"32px"} alignItems={"center"}>
            <Link href="/Rules">
              <Box h={"18px"} ml={"28px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  lineHeight={"18px"}
                  color={pathname === "/Rules" ? "#FFFFFF" : "#949494"}
                >
                  Getting Started
                </Text>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"160px"}
            direction={"column"}
            pl={"12px"}
            mt={"-5px"}
            hidden={pathname === "/Rules" ? false : true}
          >
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 4 ? "#FBFBFB" : "#949494"}
              ></Box>

              <Link href="#creating-new-proposal">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx === 4 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Creating a proposal
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 3 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#proposal-categories">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 3 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Proposal categories
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 2 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#proposal-phases">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 2 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Proposal phases
                  </Text>
                </Box>
              </Link>
            </Flex>
            {/* <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box h={"32px"} w={"2px"} bg={"#292929"}></Box>
              <Box h={"18px"} w={"172px"}>
                <Text
                  fontFamily={"CircularStd"}
                  color={"#FBFBFB"}
                  fontSize={"15px"}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                >
                  Proposal reviews
                </Text>
              </Box>
            </Flex> */}
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 1 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#voting-process">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 1 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    The voting process
                  </Text>
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Stack>
      <Stack>
        <Stack h={pathname === "/Rules/FundingAllocation" ? "134px" : "32px"}>
          <Link href="/Rules/FundingAllocation">
            <Flex h={"32px"} alignItems={"center"}>
              <Box h={"18px"} ml={"28px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  lineHeight={"18px"}
                  color={
                    pathname === "/Rules/FundingAllocation"
                      ? "#FFFFFF"
                      : "#949494"
                  }
                >
                  Funding Allocation
                </Text>
              </Box>
            </Flex>{" "}
          </Link>
          <Flex
            h={"160px"}
            direction={"column"}
            pl={"12px"}
            mt={"-5px"}
            hidden={pathname === "/Rules/FundingAllocation" ? false : true}
          >
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 7 ? "#FBFBFB" : "#949494"}
              ></Box>

              <Link href="#whats-the-funding-allocation">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 7 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    What is FA?
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 6 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#request-funding">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 6 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Request Funding
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 5 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#partnership-request">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 5 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Partnership Request
                  </Text>
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Stack>
      <Stack>
        <Stack h={pathname === "/Rules/ProcessImprovement" ? "166px" : "32px"}>
          <Link href="/Rules/ProcessImprovement">
            <Flex h={"32px"} alignItems={"center"}>
              <Box h={"18px"} ml={"28px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  lineHeight={"18px"}
                  color={
                    pathname === "/Rules/ProcessImprovement"
                      ? "#FFFFFF"
                      : "#949494"
                  }
                >
                  Process Improvement
                </Text>
              </Box>
            </Flex>{" "}
          </Link>
          <Flex
            h={"160px"}
            direction={"column"}
            pl={"12px"}
            mt={"-5px"}
            hidden={pathname === "/Rules/ProcessImprovement" ? false : true}
          >
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 11 ? "#FBFBFB" : "#949494"}
              ></Box>

              <Link href="#what-is-pi">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 11 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    What is PI?
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 10 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#collectibles">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 10 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Collectibles
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 9 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#mongolnft-dao">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 9 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    MongolNFT DAO
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 8 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#mongolnft-marketplace">
                <Box h={"18px"} w={"178px"} mr={"-6px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    color={idx == 8 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    MongolNFT Marketplace
                  </Text>
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
}
