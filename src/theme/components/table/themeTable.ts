import { MantineThemeComponents, Table } from "@pansophictech/base";

export const themeTable: Partial<MantineThemeComponents> = {
  Table: Table.extend({
    defaultProps: {
      withRowBorders: true,
      withColumnBorders: true,
      striped: true,
      style: {
        textTransform: "capitalize",
      },
    },
  }),
};
