import { Flex, Text } from "@pansophictech/base";
import { InquiryButton } from "./InquiryButton";

export const NoInquiryFound = () => {
  return (
    <>
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        h="calc(100vh - 110px)"
        gap={10}
      >
        <Text c={"gray.6"} fs={"14px"}>
          No inquiries have been raised yet. Click the ‘Raise Inquiry’ button on
          the left.
        </Text>

        <Text fs={"14px"} c={"gray.6"}>
          Or
        </Text>
        <InquiryButton />
      </Flex>
    </>
  );
};
