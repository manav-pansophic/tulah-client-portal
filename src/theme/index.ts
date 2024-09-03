import {
  createTheme,
  DEFAULT_THEME,
  MantineThemeOverride,
  mergeMantineTheme,
} from "@pansophictech/base";
import { themeComponents } from "./components";
import { themeColors } from "./colors";

export const themeOverride: MantineThemeOverride = createTheme({
  colors: themeColors,
  primaryColor: "theme",
  primaryShade: 4,
  cursorType: "pointer",
  components: themeComponents,
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
