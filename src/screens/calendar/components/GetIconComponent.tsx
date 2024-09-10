import { IconMessageCircle, IconCalendarEvent, IconFriends, IconBellPlus, IconBrandZoom } from '@tabler/icons-react';

interface IconComponents {
  [key: string]: JSX.Element;
}

const iconComponents: IconComponents = {
  interview: <IconFriends stroke={2} />,
  meeting: <IconBrandZoom stroke={2} />,
  event: <IconCalendarEvent stroke={2} />,
  reminder: <IconBellPlus stroke={2} />,
  default: <IconMessageCircle stroke={2} />
};

// Function to get the icon component based on the icon name
export const getIconComponent = (iconName: string): JSX.Element => {
  return iconComponents[iconName.toLowerCase()] || iconComponents.default;
};
