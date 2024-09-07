import { Button, Flex, Text } from "@pansophictech/base";

const ReportCharges = () => {
  return (
    <Flex justify={"center"} direction={"column"} align={"center"}>
      <Text
        c="theme"
        fw={600}
        tt="uppercase"
        style={{
          letterSpacing: "2px",
        }}
      >
        Report Charges
      </Text>
      <Text fw={800} size={"30px"} c="theme">
        15000
      </Text>
      <Text size={"10px"} py="sm">
        Incl. of all taxes
      </Text>
      <Button
        radius={"xl"}
        size="sm"
        fullWidth
        mb={10}
        className="layout"
        c="black"
        data-test-id="add-to-basket-button"
      >
        ADD TO BASKET
      </Button>
      <Button
        radius={"xl"}
        size="sm"
        data-test-id="procced-to-paument  -button"
      >
        PROCCED TO PAYMENT
      </Button>
    </Flex>
  );
};

export default ReportCharges;
