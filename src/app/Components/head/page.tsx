import {
  Stack,
  Text,
  Box,
  Divider,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import ToggleColorMode from "../toggleColorMode";
import "@vetixy/circular-std";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Headers() {
  const router = useRouter();
  const pathname = usePathname();
  const MENU_ITEMS = [
    { title: "Home", href: "/#", width: "93.55px" },
    { title: "Rules", href: "/Rules", width: "89.55px" },
    { title: "Discussions", href: "/discussions", width: "135.55px" },
    { title: "Voting", href: "/voting", width: "138.55px" },
    { title: "Buy & Sell", href: "/buy", width: "93.55px" },
  ];
  const selected = MENU_ITEMS.findIndex((e) => pathname.includes(e.href));

  console.log("====", router);
  console.log("-----", pathname);

  console.log("0000", selected);
  return (
    <>
      <Flex
        direction={"row"}
        w={{ base: "1440px", "2xl": "1440px" }}
        alignItems={"center"}
        bg={"#000"}
        h={"64px"}
        mx={"auto"}
        zIndex={100}
        position="sticky"
        top="0"
        borderBottom={"1px solid #282828"}
      >
        <Box p={"10px"} pl="20px" w="256px" ml={"20px"}>
          <Text
            fontFamily={"CircularStd"}
            color="#ffffff"
            fontWeight={"500"}
            lineHeight={"24px"}
            fontSize={"20px"}
          >
            MongolNFTDAO
          </Text>
        </Box>
        <Divider color={"#282828"} orientation="vertical" />
        <Box w={"485.7px"}>
          <Text fontFamily={"CircularStd"} color="b3b3b3">
            Search
          </Text>
        </Box>
        <Divider color={"#282828"} orientation="vertical" />
        <Flex
          fontSize={"16px"}
          boxSizing="border-box"
          textAlign={"center"}
          h={"60px"}
          w={"698.3px"}
        >
          {MENU_ITEMS.map((data, id) => (
            <Link key={id} href={data.href}>
              <Button
                h={"62px"}
                w={data.width}
                borderRight={"1px solid #282828"}
                alignItems={"center"}
                justifyContent={"center"}
                bg={selected === id ? "#282828" : "black"}
                borderRadius={"0"}
                borderBottom={"1px solid #282828"}
              >
                <Box h={"24.5px"}>
                  <Text
                    color="b3b3b3"
                    fontFamily={"CircularStd"}
                    lineHeight={"24px"}
                    fontSize={"16px"}
                    textAlign={"center"}
                    fontWeight={"500"}
                  >
                    {data.title}
                  </Text>
                </Box>
                {data.title === "Buy & Sell" ? (
                  <Box alignSelf={"center"} w={"16px"} h={"16px"}>
                    <AiOutlineDown color="b3b3b3" />
                  </Box>
                ) : null}
              </Button>
            </Link>
          ))}

          <Stack
            w="77.55px"
            borderRight={"1px solid #282828"}
            h={"64px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box h={"24.5px"} alignSelf={"center"}>
              <Text
                color="b3b3b3"
                fontFamily={"CircularStd"}
                fontSize={"16px"}
                textAlign={"center"}
              >
                MN
              </Text>
            </Box>
          </Stack>

          <Stack
            fontSize={"16px"}
            alignSelf={"center"}
            w="66px"
            h={"64px"}
            borderRight={"1px solid #282828"}
            justifyContent={"center"}
          >
            {/* <Text color="b3b3b3">M</Text> */}
            <ToggleColorMode />
          </Stack>
        </Flex>
      </Flex>
      {/* <Divider color={"#282828"} orientation="horizontal" /> */}
    </>
  );
}
