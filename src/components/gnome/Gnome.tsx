import {
  Box,
  Divider,
  Flex,
  Paper,
  Select,
  Stack,
  Text,
} from "@pansophictech/base";
import { RiDragMove2Line } from "@remixicon/react";
import GnomeAccordion from "./GnomeAccordion";
import Instruction from "./Instruction";
import ReportCharges from "./ReportCharges";
import TestStatus from "./TestStatus";
import GnomeFileUploadForm from "./uploadFile/GnomeFileUploadForm";
import { useGetAllGuestListQuery } from "../../services/guests/guestServices";
import { createGuestSelectOptions } from "../../helper/functions";

const Gnome = () => {
  const instructionList = [
    {
      list: "Authorize the collection of your GNOME report on your behalf from the report provider.",
    },
    {
      list: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ducimus quas tenetur animi eius totam omnis in minima corrupti quasi onsectetur adipisicing elit. Sed ducimus quasonsectetur adipisicing elit. Sed ducimus quas",
    },
    {
      list: "Authorize the collection of your GNOME report on your behalf from the report provider.",
    },
    {
      list: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ducimus quas tenetur animi eius totam omnis in minima corrupti quasi onsectetur adipisicing elit. Sed ducimus quasonsectetur adipisicing elit. Sed ducimus quas",
    },
  ];

  const option1 = [
    {
      value: "Options 1",
      questionList:
        "Authorize the collection of your GNOME report on your behalf from the report provider.",
      description:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
      component: (
        <>
          <Flex gap="sm">
            <Instruction
              instructionTitle="Authorize the collection of your GNOME report on your behalf from the report provider."
              instructionList={instructionList}
            />
            <ReportCharges />
          </Flex>
        </>
      ),
    },
  ];
  const option2 = [
    {
      value: "Options 2",
      questionList: "Already have a report? Upload it here.",
      description:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
      component: (
        <>
          <Flex gap="sm">
            <Instruction
              instructionTitle="Authorize the collection of your GNOME report on your behalf from the report provider."
              instructionList={instructionList}
            />
            <GnomeFileUploadForm />
          </Flex>
        </>
      ),
    },
  ];

  const { data } = useGetAllGuestListQuery();
  const guestList = data?.results;
  const guestListOption = guestList?.length ? createGuestSelectOptions(guestList) : []

  return (
    <Flex>
      <Box className="layout-bg-color navbar-layout" p={"sm"}>
        <Stack gap={8}>
          <Box py={3}>
            <Select
              defaultValue={"user"}
              data={guestListOption||[]}
              w={"100%"}
              placeholder="Select Guest"
            />
          </Box>
          <Divider color="gray" pb="sm" />
          <Text c="theme" size="sm" fw={600}>
            Choose the tests you wish to take.
          </Text>
          <TestStatus
            testIcon={<RiDragMove2Line color="var(--mantine-color-theme-6)" />}
            testName="GNOME"
            testStatus="To be done"
          />
          <TestStatus
            testIcon={<RiDragMove2Line color="var(--mantine-color-theme-6)" />}
            testName="GNOME"
            testStatus="To be done"
          />
          <TestStatus
            testIcon={<RiDragMove2Line color="var(--mantine-color-theme-6)" />}
            testName="GNOME"
            testStatus="To be done"
          />
          <TestStatus
            testIcon={<RiDragMove2Line color="var(--mantine-color-theme-6)" />}
            testName="GNOME"
            testStatus="To be done"
          />
        </Stack>
      </Box>
      <Box h="calc(100vh - 110px)" w={"100%"}>
        <Paper className="layout" p="sm" mx="sm" radius={"lg"}>
          <Text fw={600}>What is GNOME?</Text>
          <Text size="sm" pt="sm">
            Lorem ipsum dolor sit amet consectetur. Cum diam viverra magna
            tellus sollicitudin magna. Amet in libero phasellus viverra at elit
            tellus porttitor. Aliquam eu vitae sociis dui id. Accumsan ultrices
            dui tortor mi. Tortor cum accumsan pulvinar id molestie bibendum in
            aliquet. Non enim nulla pulvinar quis a ut egestas. Et nibh dolor
            adipiscing quam parturient tortor facilisis. Proin vitae congue arcu
            elit. Molestie sed cursus aliquam ut suscipit tempor lectus eu at.
            Curabitur elit viverra vitae habitant. Nascetur mauris orci a urna
            mollis faucibus commodo quis. Proin sit ultrices enim placerat eget.
            Ac convallis dictum feugiat phasellus at eu proin.
          </Text>
        </Paper>
        <GnomeAccordion data={option1} />
        <GnomeAccordion data={option2} />
      </Box>
    </Flex>
  );
};

export default Gnome;
