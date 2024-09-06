import {
  Avatar,
  Badge,
  Box,
  Divider,
  Flex,
  Text,
  Title,
} from "@pansophictech/base";
import { FC } from "react";
import profileInfoCardCSS from "./sidebar.module.css";

interface IProfileInfoCard {
  name: string;
  avatar?: string;
  avatarSize?: string;
  badgeName?: string;
  time?: string;
  onClick: any
}

const UserCard: FC<IProfileInfoCard> = ({
  name,
  avatar,
  avatarSize,
  badgeName,
  time,
  onClick
}) => {
  return (
    <Box onClick={onClick}>
      <Flex
        mih={50}
        gap="md"
        direction="row"
        className={`${profileInfoCardCSS.card} items-center`}
        justify="flex-start"
      >
        <Box py={7}>
          <Avatar size={avatarSize ?? "lg"} radius="xl" src={avatar} />
        </Box>
        <Flex justify="space-between" w="100%" py={7}>
          <Box>
            <Title order={5} size="sm" textWrap="nowrap" fw={500}>
              {name}
            </Title>
            {badgeName && <Badge radius="sm">{badgeName.toUpperCase()}</Badge>}
          </Box>
          <Box>
            {time && (
              <Box>
                <Text size="sm" ta="right">
                  {time}
                </Text>
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
      <Divider color="gray.5" />
    </Box>
  );
};

export default UserCard;
