import { Accordion, Paper, Stack, Text } from "@pansophictech/base";
import GnomeAccordion from "./GnomeAccordion";

const Gnome = () => {
  const groceries = [
    {
      value: "Options 1",
      questionList:
        "Authorize the collection of your GNOME report on your behalf from the report provider.",
      description:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
      component: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dicta
          in quasi ea aperiam cum consequuntur similique dolore corporis
          nostrum.
        </>
      ),
    },
  ];
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>
        <Stack gap="sm">
          <Text c="theme" fw={600}>
            {item.value}
          </Text>
          <Text size="md" fw={600}>
            {item.questionList}
          </Text>
          <Text size={"12px"} pt="sm">
            {item.description}
          </Text>
        </Stack>
      </Accordion.Control>
      <Accordion.Panel>{item.component}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div>
      <Paper
        className="layout-bg-color"
        style={{
          backdropFilter: "blur(40px)",
        }}
        m="sm"
        radius={"lg"}
      >
        <GnomeAccordion data={groceries} />
      </Paper>
    </div>
  );
};

export default Gnome;
