import { Accordion, Paper, Stack, Text } from "@pansophictech/base";
import { FC } from "react";

const GnomeAccordion: FC<{ data: any }> = ({ data }) => {
  const items = data.map((item: any) => (
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
    <Paper
      className="layout-bg-color"
      style={{ backdropFilter: "blur(40px)" }}
      m="sm"
      radius={"lg"}
    >
      <Accordion defaultValue="Apples">{items}</Accordion>
    </Paper>
  );
};

export default GnomeAccordion;
