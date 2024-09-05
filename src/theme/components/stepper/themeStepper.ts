import { MantineThemeComponents, Stepper } from "@pansophictech/base";
import stepperCss from "./stepper.module.css";

export const themeStepper: Partial<MantineThemeComponents> = {
  Stepper: Stepper.extend({
    defaultProps: {
      size: "xs",
    },
    classNames: stepperCss,
  }),
};
