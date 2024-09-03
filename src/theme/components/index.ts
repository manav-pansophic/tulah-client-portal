import { MantineThemeComponents } from "@pansophictech/base";
import { themeButton } from "../../theme/components/button/ThemeButton";
import { themeInput } from "../../theme/components/input/themeInput";
import { themeBadge } from "../../theme/components/badge/themeBadge";
import { themeDrawer } from "../../theme/components/drawer/themeDrawer";
import { themeModal } from "../../theme/components/modal/ThemeModal";
import { themeTable } from "../../theme/components/table/themeTable";
import { themeTooltip } from "../../theme/components/tooltip/themeTooltip";
import { themeOverlay } from "../../theme/components/overlay/ThemeOverlay";
import { themeSwitch } from "../../theme/components/switch/ThemeSwitch";

export const themeComponents: Partial<MantineThemeComponents> = {
  ...themeButton,
  ...themeInput,
  ...themeBadge,
  ...themeDrawer,
  ...themeModal,
  ...themeTable,
  ...themeTooltip,
  ...themeOverlay,
  ...themeSwitch,
};
