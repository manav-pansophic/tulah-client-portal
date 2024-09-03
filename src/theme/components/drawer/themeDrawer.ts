import { Drawer, MantineThemeComponents } from "@pansophictech/base";
import popupCss from "../modal/popup.module.css";

export const themeDrawer: Partial<MantineThemeComponents> = {
  Drawer: Drawer.extend({
    defaultProps: {
      size: "xs",
    },
    classNames: popupCss,
  }),
};
