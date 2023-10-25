import { Box, Link, Stack, Text } from "@chakra-ui/react";
import "@vetixy/circular-std";
export default function Footers() {
  const data = [
    {
      title: "MongolNFT",
      dat: [
        { title: "Marketplace", href: "/marketplace" },
        { title: "Streaming", href: "/streaming" },
      ],
    },
    {
      title: "MNFT",
      dat: [
        { title: "Web", href: "/web" },
        { title: "Whitepaper", href: "/Whitepaper" },
        { title: "Tokenomics", href: "/tokenomics" },
        { title: "Burn Protocol", href: "/Protocol" },
      ],
    },
    {
      title: "Projects",
      dat: [
        { title: "Metaverse", href: "/metaverse" },
        { title: "Mini-games", href: "/mini-games" },
        { title: "The Feast", href: "/mini-games" },
      ],
    },
    {
      title: "Socials",
      dat: [
        { title: "Twitter", href: "/twitter" },
        { title: "Facebook", href: "/facebook" },
        { title: "Youtube", href: "/youtube" },
        { title: "Threads", href: "/threads" },
      ],
    },
  ];
  return (
    <Box mx={"auto"} w={"1037px"} mt={"32px"} zIndex={101}>
      <Stack
        h={"358px"}
        w={"866px"}
        mx={{ base: "auto", "2xl": "60px" }}
        justifyContent={"space-between"}
      >
        <Stack h={"205px"} direction={"row"} justifyContent={"space-around"}>
          {data.map((data, id) => (
            <Stack key={id} w={id === 3 ? "75px" : "192px"}>
              <Box
                h={"19px"}
                mb={"5px"}
                // textAlign={id === 3 ? "right" : id === 0 ? "left" : "center"}
              >
                <Text
                  fontFamily={"CircularStd"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  lineHeight={"18.2px"}
                  color={"#FFFFFF"}
                  mb={"20px"}
                >
                  {data.title}
                </Text>
              </Box>
              {data.dat.map((data, idx) => (
                <Link href={data.href} key={idx} mb={"10px"}>
                  <Box>
                    <Text
                      fontFamily={"CircularStd"}
                      fontSize={"16px"}
                      fontWeight={"450"}
                      lineHeight={"22.4px"}
                      color={"#949494"}
                      // textAlign={
                      //   id === 3 ? "right" : id === 0 ? "left" : "center"
                      // }
                    >
                      {data.title}
                    </Text>
                  </Box>
                </Link>
              ))}
            </Stack>
          ))}
        </Stack>
        <Stack
          h={"89px"}
          borderTop={"1px solid grey"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"}>
            <Text
              fontFamily={"CircularStd"}
              lineHeight={"24px"}
              fontSize={"15px"}
              fontWeight={"500px"}
              color={"#7E7E7E"}
            >
              MongolNFT
            </Text>
            <Text
              fontFamily={"CircularStd"}
              lineHeight={"22.4px"}
              fontSize={"15px"}
              fontWeight={"450px"}
              color={"#636363"}
            >
              © 2023 All rights reserved
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Text
              fontFamily={"CircularStd"}
              lineHeight={"22.4px"}
              fontSize={"14px"}
              fontWeight={"450px"}
              color={"#636363"}
            >
              Privacy Policy
            </Text>
            <Text
              fontFamily={"CircularStd"}
              lineHeight={"22.4px"}
              fontSize={"14px"}
              fontWeight={"450px"}
              color={"#636363"}
            >
              Term of Service
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
