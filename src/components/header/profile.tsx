import { FC } from "react";
import { Avatar, Flex } from "@pansophictech/base";

const Profile: FC<{ alt?: any; src?: any }> = ({ alt, src }) => {
  return (
    <Flex align={'center'} justify={"center"}>
      <Avatar src={src} alt={alt} size={32} />
    </Flex>
  );
};

export default Profile;
