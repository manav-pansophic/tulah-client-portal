import { Flex, Paper, Text } from "@pansophictech/base";
import GnomeAccordion from "./GnomeAccordion";
import Instruction from "./Instruction";
import ReportCharges from "./ReportCharges";

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
  const groceries = [
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

  return (
    <div>
      <Paper
        className="layout-bg-color"
        style={{
          backdropFilter: "blur(40px)",
        }}
        m="sm"
        p="sm"
        radius={"lg"}
      >
        <Text fw={600}>What is GNOME?</Text>
        <Text size="sm" pt="sm">
          Lorem ipsum dolor sit amet consectetur. Cum diam viverra magna tellus
          sollicitudin magna. Amet in libero phasellus viverra at elit tellus
          porttitor. Aliquam eu vitae sociis dui id. Accumsan ultrices dui
          tortor mi. Tortor cum accumsan pulvinar id molestie bibendum in
          aliquet. Non enim nulla pulvinar quis a ut egestas. Et nibh dolor
          adipiscing quam parturient tortor facilisis. Proin vitae congue arcu
          elit. Molestie sed cursus aliquam ut suscipit tempor lectus eu at.
          Curabitur elit viverra vitae habitant. Nascetur mauris orci a urna
          mollis faucibus commodo quis. Proin sit ultrices enim placerat eget.
          Ac convallis dictum feugiat phasellus at eu proin.
        </Text>
      </Paper>
      <GnomeAccordion data={groceries} />
    </div>
  );
};

export default Gnome;
