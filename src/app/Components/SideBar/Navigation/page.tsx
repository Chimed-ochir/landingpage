import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import "@vetixy/circular-std";
export default function NavigationSideBar() {
  return (
    <Box
      h={"1140px"}
      w={"256px"}
      zIndex={100}
      position="fixed"
      left="0"
      ml={"14px"}
      borderRight={"1px solid #292929"}
    >
      <Stack pt={"32px"}>
        <Stack h={"198px"}>
          <Flex h={"32px"} alignItems={"center"}>
            <Box h={"18px"} ml={"28px"}>
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"18px"}
                color={"#FFFFFF"}
              >
                Getting Started
              </Text>
            </Box>
          </Flex>
          <Flex h={"160px"} direction={"column"} pl={"12px"} mt={"-5px"}>
            <Flex
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
                  Creating a proposal
                </Text>
              </Box>
            </Flex>
            <Flex
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
                  Proposal categories
                </Text>
              </Box>
            </Flex>
            <Flex
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
                  Proposal phases
                </Text>
              </Box>
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
              <Box h={"32px"} w={"2px"} bg={"#292929"}></Box>
              <Box h={"18px"} w={"172px"}>
                <Text
                  fontFamily={"CircularStd"}
                  color={"#FBFBFB"}
                  fontSize={"15px"}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                >
                  The voting process
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
}
