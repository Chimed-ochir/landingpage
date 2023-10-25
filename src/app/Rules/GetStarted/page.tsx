"use client";
import { Box, Button, Divider, Link, Stack, Text } from "@chakra-ui/react";
import "@vetixy/circular-std";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
export default function GetStarted() {
  const path = usePathname();
  const router = useRouter();
  console.log("pathname", path);
  return (
    <Box w={"800px"} h={"2781.39px"}>
      <Stack h={"127px"} justifyContent={"space-between"}>
        <Stack
          h={"77px"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box w={"340px"} h="77px">
            <Text
              fontFamily={"CircularStd"}
              fontWeight={"500"}
              fontSize={"48px"}
              lineHeight={"76.8px"}
              letterSpacing={"-0.96 px"}
              color={"#E0E0E0"}
            >
              Getting started
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
              5 min read
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
        h={"2654.39px"}
      >
        <Box pt={"63.375px"}>
          <Box w="715px" h={"90px"}>
            <Text
              fontFamily={"CircularStd"}
              fontWeight={"450"}
              fontSize={"18px"}
              lineHeight={"30px"}
              color={"#949494"}
            >
              Discover essential information about MongolNFT DAO in this
              section. It&#39;s a valuable resource for both new users and
              seasoned members, providing tips for navigating MongolNFT DAO
              Discourse. Find more at https://gov.mongolnft.com
            </Text>
          </Box>
        </Box>
        <Stack h={"243.735px"} justifyContent={"space-between"} pt={"63.375px"}>
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
          <Box w="736px" h={"120px"}>
            <Text
              fontFamily={"CircularStd"}
              fontWeight={"450"}
              fontSize={"18px"}
              lineHeight={"30px"}
              color={"#949494"}
            >
              Join our vibrant and inclusive community that embraces
              transparency, collaboration, and decentralized decision-making.
              Shape the future by submitting proposals, engaging in discussions,
              and pushing the boundaries of innovation. Together, let&#39;s
              redefine what&#39;s possible in the world of NFTs.
            </Text>
          </Box>
        </Stack>

        <Stack
          h={"383.375px"}
          // id="creating-new-proposal"
          justifyContent={"space-between"}
          pt={"63.375px"}
          id="creating-new-proposal"
        >
          <Link href="#creating-new-proposal">
            <Box h="30px">
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"500"}
                fontSize={"24px"}
                lineHeight={"30px"}
                color={"#E0E0E0"}
              >
                Creating a new proposal
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
              We encourage all community members who hold at least one NFT or
              1,000 MNFT coins on the MongolNFT platform to create new
              proposals. Additionally the management team of MongolNFT can
              submit proposals for projects that require the allocation of the
              MNFT coin. 
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
              When submitting a proposal, please provide a clear title and
              select the relevant proposal category and type. In the abstract,
              succinctly explain the main idea of your proposal, including the
              overall cost, timeline, and key milestones. Feel free to include
              supplementary materials such as new terminology explanation,
              photos, videos, or other relevant files to help us better
              understand your idea and evaluate it effectively.
            </Text>
          </Box>
        </Stack>

        <Stack
          h={"501.375px"}
          justifyContent={"space-between"}
          id="proposal-categories"
          pt={"63.375px"}
        >
          <Link href="#proposal-categories">
            <Box h="30px">
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"500"}
                fontSize={"24px"}
                lineHeight={"30px"}
                color={"#E0E0E0"}
              >
                Proposal categories
              </Text>
            </Box>
          </Link>
          <Stack>
            <Box>
              <Box h="30px" w={"579px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#E0E0E0"}
                >
                  Within MongolNFT DAO, we welcome two distinct types of
                  proposals:
                </Text>
              </Box>
            </Box>
            <Stack
              w="736px"
              h={"120px"}
              direction="row"
              justifyContent={"space-between"}
            >
              <Box
                w="9px"
                h="30px"
                color={"#949494"}
                lineHeight={"30px"}
                fontSize="15px"
                fontWeight={"400"}
              >
                •
              </Box>
              <Box w="715px" h={"120px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"450"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#949494"}
                >
                  <Text as="span" fontWeight="700" color={"#E0E0E0"}>
                    Fund Allocation:{" "}
                  </Text>{" "}
                  We&#39;ve allocated 10 billion MNFT or an equivalent fiat
                  amount to fund projects and initiatives that drive the growth
                  of our ecosystem. This dedicated fund is designed to support
                  innovative endeavors, propel new initiatives, and foster the
                  expansion of our vibrant community.
                </Text>
              </Box>
            </Stack>
            <Stack
              w="736px"
              h={"120px"}
              direction="row"
              justifyContent={"space-between"}
            >
              <Box
                w="9px"
                h="30px"
                color={"#949494"}
                lineHeight={"30px"}
                fontSize="15px"
                fontWeight={"400"}
              >
                •
              </Box>
              <Box w="715px" h={"120px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"450"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#949494"}
                >
                  <Text as="span" fontWeight="700" color={"#E0E0E0"}>
                    Process Improvement:{" "}
                  </Text>{" "}
                  Process improvement proposals aim to enhance the efficiency
                  and effectiveness of our day-to-day operations. From
                  streamlining procedures to optimizing communication channels,
                  these proposals focus on making our operations and DAO more
                  streamlined and impactful.
                </Text>
              </Box>
            </Stack>
            <Stack
              w="736px"
              h={"120px"}
              direction="row"
              justifyContent={"space-between"}
            >
              <Box
                w="9px"
                h="30px"
                color={"#949494"}
                lineHeight={"30px"}
                fontSize="15px"
                fontWeight={"400"}
              >
                •
              </Box>
              <Box w="715px" h={"120px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"450"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#949494"}
                >
                  <Text as="span" fontWeight="700" color={"#E0E0E0"}>
                    Community Wallet:{" "}
                  </Text>{" "}
                  We pool a certain percentage of income from &#34;The
                  Wolves&#34; collectibles merch sales into a community shared
                  wallet. Submit proposals to access these funds for empowering
                  activities and projects within the Wolves community.
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          h={"565.375px"}
          justifyContent={"space-between"}
          id="proposal-phases"
          pt={"63.375px"}
        >
          <Link href="#proposal-phases">
            <Box h="30px">
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"500"}
                fontSize={"24px"}
                lineHeight={"30px"}
                color={"#E0E0E0"}
              >
                Proposal phases
              </Text>
            </Box>
          </Link>
          <Stack h="272px">
            <Box>
              <Box h="30px" w={"686px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#E0E0E0"}
                >
                  There are a total of 4 phases that your proposal will go
                  through from its submission:
                </Text>
              </Box>
            </Box>
            <Stack
              w="736px"
              h={"234px"}
              direction="row"
              justifyContent={"space-between"}
            >
              <Box
                w="9px"
                h="30px"
                color={"#949494"}
                lineHeight={"30px"}
                fontSize="15px"
                fontWeight={"400"}
              >
                •
              </Box>
              <Box w="715px" h={"30px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"450"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#949494"}
                >
                  <Text as="span" fontWeight="700" color={"#E0E0E0"}>
                    Phase 1:{" "}
                  </Text>{" "}
                  Community members can submit their proposals whenever they
                  would like.
                </Text>
              </Box>
            </Stack>
            <Stack
              w="736px"
              h={"60px"}
              direction="row"
              justifyContent={"space-between"}
            >
              <Box
                w="9px"
                h="30px"
                color={"#949494"}
                lineHeight={"30px"}
                fontSize="15px"
                fontWeight={"400"}
              >
                •
              </Box>
              <Box w="715px" h={"120px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"450"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#949494"}
                >
                  <Text as="span" fontWeight="700" color={"#E0E0E0"}>
                    Phase 2:{" "}
                  </Text>{" "}
                  After a proposal is submitted, the moderator will review the
                  proposals and provide feedback within 7 calendar days.
                </Text>
              </Box>
            </Stack>
            <Stack
              w="736px"
              h={"60px"}
              direction="row"
              justifyContent={"space-between"}
            >
              <Box
                w="9px"
                h="30px"
                color={"#949494"}
                lineHeight={"30px"}
                fontSize="15px"
                fontWeight={"400"}
              >
                •
              </Box>
              <Box w="715px" h={"60px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"450"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#949494"}
                >
                  <Text as="span" fontWeight="700" color={"#E0E0E0"}>
                    Phase 3:{" "}
                  </Text>{" "}
                  The Management and Council will schedule a meeting the third
                  week of every month to gather and discuss the proposals.
                </Text>
              </Box>
            </Stack>
            <Stack
              w="736px"
              h={"60px"}
              direction="row"
              justifyContent={"space-between"}
            >
              <Box
                w="9px"
                h="30px"
                color={"#949494"}
                lineHeight={"30px"}
                fontSize="15px"
                fontWeight={"400"}
              >
                •
              </Box>
              <Box w="715px" h={"60px"}>
                <Text
                  fontFamily={"CircularStd"}
                  fontWeight={"450"}
                  fontSize={"18px"}
                  lineHeight={"30px"}
                  color={"#949494"}
                >
                  <Text as="span" fontWeight="700" color={"#E0E0E0"}>
                    Phase 4:{" "}
                  </Text>{" "}
                  The discussion and voting phases will begin in the fourth week
                  of the month and will last at least 5 working days.
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Stack alignItems="flex-end" w="736px">
            <Box w="714.91px" h={"150px"}>
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"450"}
                fontSize={"18px"}
                lineHeight={"30px"}
                color={"#949494"}
              >
                When submitting a proposal, please provide a clear title and
                select the relevant proposal category and type. In the abstract,
                succinctly explain the main idea of your proposal, including the
                overall cost, timeline, and key milestones. Feel free to include
                supplementary materials such as new terminology explanation,
                photos, videos, or other relevant files to help us better
                understand your idea and evaluate it effectively.
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Stack
          h={"534.375px"}
          justifyContent={"space-between"}
          id="voting-process"
          pt={"63.375px"}
        >
          <Link href="#voting-process">
            <Box h="30px">
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"500"}
                fontSize={"24px"}
                lineHeight={"30px"}
                color={"#E0E0E0"}
              >
                The voting process
              </Text>
            </Box>
          </Link>
          <Stack
            w="736px"
            h={"152px"}
            direction="row"
            justifyContent={"space-between"}
          >
            <Box w="715px" h={"152px"}>
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"450"}
                fontSize={"18px"}
                lineHeight={"30px"}
                color={"#949494"}
              >
                The final proposals will be posted in the Voting section for
                consideration and voting by the MNFT coin holders. MNFT coin
                holders can vote based on the amount of coins they hold in their
                MongolNFT wallet. The voting results are considered valid once
                the total MNFT coin holdings of voters surpasses the 1 billion
                mark. Each voter&#39;s vote is weighted based on the number of
                MNFT coins they possess. 
              </Text>
            </Box>
          </Stack>
          <Stack
            w="736px"
            h={"120px"}
            direction="row"
            justifyContent={"space-between"}
          >
            <Box w="715px" h={"120px"}>
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"450"}
                fontSize={"18px"}
                lineHeight={"30px"}
                color={"#949494"}
              >
                To pass a vote for a proposal in the Voting section, it is
                required that 51% or more of the total MNFT coin holders agree
                with the proposal. In other words, if a majority of the MNFT
                coin holders, comprising at least 51% of the total coin holders,
                vote in favor of the proposal, it will be considered passed.
              </Text>
            </Box>
          </Stack>

          <Stack alignItems="flex-end" w="736px">
            <Box h={"90px"}>
              <Text
                fontFamily={"CircularStd"}
                fontWeight={"450"}
                fontSize={"18px"}
                lineHeight={"30px"}
                color={"#949494"}
              >
                If a proposal does not pass in the Voting section, the proposer
                has the opportunity to revise and resubmit their proposal based
                on the comments and feedback received from the community members
                in the Discussion section.
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Stack h="273.134px" w="736px" py={"63.375px"}>
          <Stack
            h="146.39px"
            w="736px"
            justifyContent={"flex-end"}
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
                justifyContent={"space-evenly"}
                direction={"row"}
                alignItems={"center"}
                w="360px"
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
                      FundingAllocation
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
  );
}
