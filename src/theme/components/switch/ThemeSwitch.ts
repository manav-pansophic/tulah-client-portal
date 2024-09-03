import { MantineThemeComponents, Switch } from "@pansophictech/base";

export const themeSwitch: Partial<MantineThemeComponents> = {
  Switch: Switch.extend({
    defaultProps: {
      display: "inline-flex",
    },
  }),
};
