import { Box, Flex, Text, Stack, Button } from "@chakra-ui/react";
import "@vetixy/circular-std";
export default function Discussions() {
  const data = [
    {
      name: "Process Improvement",
      color: "#B14DFF",
      width: "174px",
      text: "152px",
    },
    { name: "MongolNFT DAO", color: "#823C3C", width: "142px", text: "120px" },
    {
      name: "MongolNFT Marketplace",
      color: "#827F3C",
      width: "197px",
      text: "175px",
    },
    { name: "Collectibles", color: "#823C73", width: "109px", text: "87px" },
  ];
  return (
    <Box mx={{ base: "auto", "2xl": "60px" }} h={"806px"} w={"866px"}>
      <Box>
        <Box bg={"#282828"} h={"42px"}>
          <Box w={"241px"} ml={"10px"} py={"10px"}>
            <Text
              color={"white"}
              fontWeight={"700"}
              fontSize={"24px"}
              lineHeight={"24px"}
            >
              Discussions
            </Text>
          </Box>
        </Box>
        <Box h={"210px"} mt={"32px"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            {data.map((data, id) => (
              <Stack
                h={"34px"}
                w={data.width}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                key={id}
              >
                <Box
                  h={"14px"}
                  w={"14px"}
                  bg={data.color}
                  rounded={"3px"}
                ></Box>
                <Box w={data.text} h={"18px"}>
                  <Text
                    fontFamily={"CircularStd"}
                    fontWeight={"700"}
                    color={"#F2F2F2"}
                    fontSize={"14px"}
                    lineHeight={"18px"}
                    p={"0"}
                    m={"0"}
                  >
                    {data.name}
                  </Text>
                </Box>
              </Stack>
            ))}
          </Stack>
          <Stack
            direction={"column"}
            h={"168px"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} h={"54px"}>
              <Box h={"54px"} w={"735px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontSize={"48px"}
                  fontWeight={"500"}
                  lineHeight={"53.5px"}
                  color={"#E0E0E0"}
                >
                  Process Improvement
                </Text>
              </Box>
              <Button
                fontFamily={"CircularStd"}
                bg={"white"}
                w={"129px"}
                h={"42px"}
                color={"#282828"}
                rounded={"6px"}
                // padding={"12px, 16px, 12px, 16px"}
                my={"auto"}
                ml={"-6px"}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"15px"}
              >
                New Proposal
              </Button>
            </Stack>
            <Stack h={"90px"} bg={"black"} w={"866px"}>
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"450"}
                fontSize={"18px"}
                lineHeight={"30px"}
                color={"#949494"}
              >
                We&#39;ve allocated 10 billion MNFT or an equivalent fiat amount
                to fund projects and initiatives that drive the growth of our
                ecosystem. This dedicated fund is designed to support innovative
                endeavors, propel new initiatives, and foster the expansion of
                our vibrant community. Learn more
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Stack h={"437px"} bg={"green"} mt={"32px"}></Stack>
      <Box
        fontWeight={"700&apos;"}
        pos={"relative"}
        fontSize={"13px"}
        lineHeight={"18px"}
        mt={"10px"}
      >
        <Box
          w={"127px"}
          h={"21px"}
          // mt={"-2"}
          pos={"absolute"}
          right={"0"}
          mt={"25px"}
        >
          <Text
            h={"18px"}
            textAlign={"right"}
            fontFamily={"CircularStd"}
            color={"#FBFBFB"}
            lineHeight={"18px"}
            fontSize={"15px"}
            fontWeight={"700"}
          >
            View all proposal
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
