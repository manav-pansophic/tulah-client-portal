import { Paper, Text } from "@pansophictech/base";
import { FC } from "react";

const Instruction: FC<{
  instructionTitle?: string;
  instructionList?: { list: string }[];
}> = ({ instructionTitle, instructionList }) => {
  return (
    <Paper
      className="layout-bg-color"
      style={{
        backdropFilter: "blur(40px)",
      }}
      radius={"sm"}
      p="sm"
    >
      <Text fw={600}>{instructionTitle}</Text>
      {instructionList?.map((item, index) => (
        <Text key={index} size="xs" pt="xs">
          {item.list}
        </Text>
      ))}
    </Paper>
  );
};

export default Instruction;
