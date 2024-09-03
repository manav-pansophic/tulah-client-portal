import { MantineThemeComponents, Modal } from "@pansophictech/base";
import popupCss from "./popup.module.css";

export const themeModal: Partial<MantineThemeComponents> = {
  Modal: Modal.extend({
    defaultProps: {
      size: "md",
    },
    classNames: popupCss,
  }),
};
