import { TUser } from "@/shared/lib/types";
import { Avatar, Flex, Group, Title } from "@mantine/core";
import { IconSettingsFilled } from "@tabler/icons-react";
import { useSelector } from "react-redux";

export const Header = () => {
  const { user } = useSelector((state: { user: TUser }) => state);

  return (
    <Flex h={70} justify="space-between" align="center">
      <Title fz="h3" fw={700}>
        Profile Settings
      </Title>
      <Group>
        <IconSettingsFilled cursor="pointer" />
        <Avatar src={user.avatar} />
      </Group>
    </Flex>
  );
};
