import { FC } from "react";
import { Avatar, Flex } from "@pansophictech/base";

const Profile: FC<{ alt?: any; src?: any }> = ({ alt, src }) => {
  return (
    <Flex align={'center'} justify={"center"} h="80px">
      <Avatar src={src} alt={alt} size="md" />
    </Flex>
  );
};

export default Profile;
