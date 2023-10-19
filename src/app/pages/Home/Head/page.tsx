import { Box, Button, Text, Flex, Stack } from "@chakra-ui/react";
import "@vetixy/circular-std";

export default function HomeHead() {
  return (
    <Stack w={"866px"} h={"494px"} mx={{ base: "auto", "2xl": "60px" }}>
      <Stack w={"489px"} h={"340px"} direction={"column"}>
        <Box w={"489px"} h={"398px"}>
          <Box h={"194px"}>
            <Text
              fontFamily={"CircularStd"}
              color={"white"}
              fontWeight={"700"}
              fontSize={"72px"}
              lineHeight={"80px"}
            >
              MONGOLNFT DAO
            </Text>
          </Box>
          <Box h={"60px"}>
            <Text
              fontFamily={"CircularStd"}
              fontWeight={"450"}
              fontSize={"20px"}
              lineHeight={"30px"}
              color={"#FBFBFB"}
            >
              Welcome to the MongolNFT DAO, your go-to resource for all things
              DAO-related!
            </Text>
          </Box>
        </Box>
        <Flex w={"352px"} h={"48px"} justifyContent={"space-between"}>
          <Button bg={"white"} width={"152"} h={"48px"} color={"black"}>
            <Text
              fontFamily={"CircularStd"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"24px"}
              color={"#141B22"}
            >
              NEW PROPOSAL
            </Text>
          </Button>
          <Button borderColor={"white"} width={"152"} h={"48px"} border={"2px"}>
            <Text
              fontFamily={"CircularStd"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"24px"}
              color={"#FFFFFF"}
            >
              LEARN MORE
            </Text>
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
}
