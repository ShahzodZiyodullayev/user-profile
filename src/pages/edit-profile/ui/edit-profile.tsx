import { Tabs } from "@mantine/core";
import {
  IconBellFilled,
  IconCreditCardFilled,
  IconLockFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { EditPersonal } from "./edit-personal";

export const EditProfile = () => {
  return (
    <Tabs defaultValue="edit-personal">
      <Tabs.List>
        {tabs.map(({ value, icon, title }) => (
          <Tabs.Tab
            key={value}
            pl={0}
            mr={30}
            value={value}
            leftSection={icon}
            fw={500}
          >
            {title}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      <Tabs.Panel value="edit-personal">
        <EditPersonal />
      </Tabs.Panel>

      <Tabs.Panel value="security-settings">Security Settings</Tabs.Panel>

      <Tabs.Panel value="receive">Receive</Tabs.Panel>
      <Tabs.Panel value="subscription">Subscription</Tabs.Panel>
    </Tabs>
  );
};

const iconStyle = { width: 15, height: 15 };

const tabs = [
  {
    title: "Edit Personal",
    value: "edit-personal",
    icon: <IconUserFilled style={iconStyle} />,
  },
  {
    title: "Security Settings",
    value: "security-settings",
    icon: <IconLockFilled style={iconStyle} />,
  },
  {
    title: "Receive",
    value: "receive",
    icon: <IconBellFilled style={iconStyle} />,
  },
  {
    title: "Subscription",
    value: "subscription",
    icon: <IconCreditCardFilled style={iconStyle} />,
  },
];
