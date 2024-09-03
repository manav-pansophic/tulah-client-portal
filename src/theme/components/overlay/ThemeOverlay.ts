import { LoadingOverlay, MantineThemeComponents } from "@pansophictech/base";

export const themeOverlay: Partial<MantineThemeComponents> = {
  LoadingOverlay: LoadingOverlay.extend({
    defaultProps: {
      overlayProps: {
        blur: 3,
      },
    },
  }),
};
