import datePickerCss from "../input/datepicker.module.css";
import selectCss from "../input/select.module.css";
import {
  FileInput,
  InputBase,
  MantineThemeComponents,
  MultiSelect,
  NumberInput,
  PasswordInput,
  Select,
  Textarea,
  TextInput,
} from "@pansophictech/base";
import { DateInput, DatePickerInput } from "@pansophictech/dates";

export const themeInput: Partial<MantineThemeComponents> = {
  TextInput: TextInput.extend({
    defaultProps: {
      size: "md",
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
      input: {
        fontSize: 14,
      },
    },
  }),
  Textarea: Textarea.extend({
    defaultProps: {
      size: "md",
      minRows: 5,
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
      input: {
        fontSize: 14,
      },
    },
  }),
  PasswordInput: PasswordInput.extend({
    defaultProps: {
      size: "md",
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
      input: {
        fontSize: 14,
      },
    },
  }),
  NumberInput: NumberInput.extend({
    defaultProps: {
      size: "md",
      prefix: "",
      maxLength: 13,
      clampBehavior: "strict",
      hideControls: true,
      allowNegative: false,
      allowDecimal: false,
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
      input: {
        fontSize: 14,
      },
    },
  }),
  Select: Select.extend({
    defaultProps: {
      allowDeselect: false,
      checkIconPosition: "right",
      size: "md",
      styles: {
        input: { fontSize: "var(--mantine-font-size-sm)" },
        option: { fontSize: "var(--mantine-font-size-sm)" },
      },
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
    },
    classNames: selectCss,
  }),
  MultiSelect: MultiSelect.extend({
    defaultProps: {
      checkIconPosition: "right",
      size: "md",
      styles: {
        input: { fontSize: "var(--mantine-font-size-sm)" },
        option: { fontSize: "var(--mantine-font-size-sm)" },
      },
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
    },
  }),
  DatePickerInput: DatePickerInput.extend({
    defaultProps: {
      size: "md",
      valueFormat: "DD/MM/YYYY",
      // leftSection: appIcon.calendar,
      hideOutsideDates: true,
      clearable: true,
      allowDeselect: false,
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
      input: {
        fontSize: 14,
      },
    },
    classNames: datePickerCss,
  }),
  DateInput: DateInput.extend({
    defaultProps: {
      size: "md",
      valueFormat: "DD/MM/YYYY",
      // leftSection: appIcon.calendar,
      hideOutsideDates: true,
      clearable: true,
      allowDeselect: false,
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
      input: {
        fontSize: 14,
      },
    },
    classNames: datePickerCss,
  }),
  InputBase: InputBase.extend({
    defaultProps: {
      size: "md",
      styles: {
        input: { fontSize: "var(--mantine-font-size-sm)" },
      },
    },
    styles: {
      label: {
        fontSize: 14,
      },
    },
  }),
  FileInput: FileInput.extend({
    defaultProps: {
      size: "md",
      // leftSection: miscIcons.upload,
    },
    styles: {
      label: {
        marginBottom: 5,
        fontSize: 14,
      },
      input: {
        fontSize: 14,
      },
    },
  }),
};
