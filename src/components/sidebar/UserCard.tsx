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
}

const UserCard: FC<IProfileInfoCard> = ({
  name,
  avatar,
  avatarSize,
  badgeName,
  time,
}) => {
  return (
    <Box>
      <Flex
        mih={50}
        gap="md"
        direction="row"
        className={`${profileInfoCardCSS.card} items-center`}
        justify="flex-start"
        align="center"
        py={12}
      >
        <Box>
          <Avatar size={avatarSize ?? "lg"} radius="xl" src={avatar} />
        </Box>
        <Flex justify="space-between" w="100%">
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
