import { Stack, Box, Text, Button } from "@chakra-ui/react";
import "@vetixy/circular-std";
// import { useFetchDiscourseData } from "@/app/services/data/fetchDiscourseData";
export default function Active() {
  // const data = useFetchDiscourseData();
  // console.log("----", data);
  return (
    <Box
      mx={{ base: "auto", "2xl": "60px" }}
      h={"497px"}
      w={"866px"}
      mt={"32px"}
      mb={"20px"}
    >
      <Box>
        <Box bg={"#282828"} h={"42px"}>
          <Box w={"241px"} ml={"10px"} py={"10px"}>
            <Text
              fontFamily={"CircularStd"}
              color={"#FFFFFF"}
              fontWeight={"700"}
              fontSize={"24px"}
              lineHeight={"18px"}
            >
              Active Votes
            </Text>
          </Box>
        </Box>

        <Stack
          direction={"row"}
          mt={"32px"}
          h={"90px"}
          justifyContent={"space-between"}
        >
          <Box h={"90px"} w={"690px"}>
            <Text
              fontFamily={"CircularStd"}
              fontSize={"18px"}
              fontWeight={"450"}
              lineHeight={"30px"}
              color={"#949494"}
            >
              The final proposals will be posted in the Voting section for
              consideration and voting by the MNFT coin holders. MNFT coin
              holders can vote based on the amount of coins they hold in their
              MongolNFT wallet. Learn more
            </Text>
          </Box>
          <Button
            bg={"#FBFBFB"}
            w={"129px"}
            h={"42px"}
            rounded={"6px"}
            // padding={"12px, 16px, 12px, 16px"}
            my={"auto"}
            ml={"-6px"}
          >
            <Text
              fontFamily={"CircularStd"}
              fontSize={"15px"}
              lineHeight={"18px"}
              color={"black"}
              fontWeight={"700"}
            >
              Vote Now
            </Text>
          </Button>
        </Stack>
      </Box>
      <Stack h={"256px"} bg={"green"} mt={"32px"}></Stack>
      <Box
        fontWeight={"700"}
        pos={"relative"}
        fontSize={"13px"}
        lineHeight={"18px"}
        mt={"10px"}
      >
        <Box w={"100px"} h={"18px"} pos={"absolute"} right={"0"} mt={"20px"}>
          <Text
            fontFamily={"CircularStd"}
            h={"18px"}
            textAlign={"right"}
            color={"#FBFBFB"}
            lineHeight={"18px"}
            fontSize={"15px"}
            fontWeight={"700"}
          >
            View all votes
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
