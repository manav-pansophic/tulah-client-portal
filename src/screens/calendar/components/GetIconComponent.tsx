import {
  RiBellFill,
  RiCalendarEventFill,
  RiFriendicaFill,
  RiMessage2Fill,
  RiZoomInFill,
} from "@remixicon/react";

interface IconComponents {
  [key: string]: JSX.Element;
}

const iconComponents: IconComponents = {
  interview: <RiFriendicaFill color="theme" />,
  meeting: <RiZoomInFill color="theme" />,
  event: <RiCalendarEventFill color="theme" />,
  reminder: <RiBellFill color="theme" />,
  default: <RiMessage2Fill color="theme" />,
};

// Function to get the icon component based on the icon name
export const getIconComponent = (iconName: string): JSX.Element => {
  return iconComponents[iconName.toLowerCase()] || iconComponents.default;
};
