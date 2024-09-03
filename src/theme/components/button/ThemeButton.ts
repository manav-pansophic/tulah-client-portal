import {
  ActionIcon,
  Button,
  MantineThemeComponents,
} from "@pansophictech/base";

export const themeButton: Partial<MantineThemeComponents> = {
  Button: Button.extend({
    defaultProps: {
      size: "md",
      variant: "filled",
      lts: "2px",
      tt: "uppercase",
    },
    styles: {
      label: {
        padding: "32px",
      },
    },
  }),
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      variant: "ai",
      size: "compact-xs",
    },
    vars: (theme, props) => {
      if (props.variant === "ai") {
        return {
          root: {
            "--ai-bg": "transparent",
            "--ai-color": "var(--mantine-color-default-color)",
            "--ai-hover": "var(--mantine-color-theme-light)",
            "--ai-hover-color": "var(--mantine-primary-color-filled)",
          },
        };
      }
      return {
        root: {},
      };
    },
  }),
};
