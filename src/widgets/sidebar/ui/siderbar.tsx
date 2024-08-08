import { Avatar, Center, NavLink, Stack } from "@mantine/core";
import {
  IconAlertCircleFilled,
  IconBallpenFilled,
  IconBellFilled,
  IconBulbFilled,
  IconHomeFilled,
  IconSquareAsteriskFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateToLink = (link: string) => navigate(link);

  return (
    <Center>
      <Stack mt={70} w="80%" gap={1}>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            active={pathname.includes(link.href)}
            label={link.label}
            leftSection={link.icon}
            styles={{
              children: {
                paddingInlineStart: 0,
              },
              label: {
                fontWeight: !link.icon ? 700 : 500,
              },
            }}
            onClick={() => navigateToLink(link.href)}
          >
            {link.children &&
              link.children.map((childLink, childIndex) => (
                <NavLink
                  key={childIndex}
                  label={childLink.label}
                  leftSection={childLink.icon}
                  styles={{
                    label: {
                      fontWeight: 500,
                    },
                  }}
                  onClick={() => navigateToLink(childLink.href)}
                />
              ))}
          </NavLink>
        ))}
      </Stack>
    </Center>
  );
};

const navLinks = [
  {
    label: "Home",
    href: "home",
    icon: <IconHomeFilled size="1rem" stroke={1.5} />,
  },
  {
    label: "Edit Profile",
    href: "edit-profile",
    icon: <IconUserFilled size="1rem" stroke={1.5} />,
  },
  {
    label: "Favorites",
    href: "#",
    children: [
      {
        label: "Notification",
        href: "notification",
        icon: <IconBellFilled size="1rem" stroke={1.5} />,
      },
      {
        label: "Friends",
        href: "friends",
        icon: <IconUserFilled size="1rem" stroke={1.5} />,
      },
      {
        label: "Feed",
        href: "feed",
        icon: <IconBallpenFilled size="1rem" stroke={1.5} />,
      },
      {
        label: "Updates",
        href: "updates",
        icon: <IconAlertCircleFilled size="1rem" stroke={1.5} />,
      },
      {
        label: "Events",
        href: "events",
        icon: <IconSquareAsteriskFilled size="1rem" stroke={1.5} />,
      },
      {
        label: "Updates Success",
        href: "updated-success",
        icon: <IconBulbFilled size="1rem" stroke={1.5} />,
      },
    ],
  },
  {
    label: "Groups",
    href: "#",
    children: [
      {
        label: "Connections",
        href: "connections",
        icon: <Avatar size={30} src="https://i.pravatar.cc/150?img=1" />,
      },
      {
        label: "Updates",
        href: "update",
        icon: <Avatar size={30} src="https://i.pravatar.cc/150?img=2" />,
      },
      {
        label: "Travel Memories",
        href: "travel-memories",
        icon: <Avatar size={30} src="https://i.pravatar.cc/150?img=3" />,
      },
      {
        label: "Updates Success",
        href: "updates-successes",
        icon: <Avatar size={30} src="https://i.pravatar.cc/150?img=4" />,
      },
    ],
  },
];
