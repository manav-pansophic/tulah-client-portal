import { AppShell, Burger } from "@pansophictech/base";
import { useDisclosure } from "@pansophictech/base";
import { ReactNode } from "react";
import "./layout.css";

interface LayoutProps {
  header?: ReactNode;
  main: ReactNode;
}

const Layout = ({ header, main }: LayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  const appShellProps = {
    ...(header && { header: { height: 100 } }),
    // ...(navbar && {
    //   navbar: { width: 314, breakpoint: "sm", collapsed: { mobile: !opened } },
    // }),
  };

  return (
    <AppShell {...appShellProps}>
      {header && (
        <AppShell.Header bg={"transparent"} withBorder={false}>
          {header}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </AppShell.Header>
      )}

      {/* {navbar && (
        <AppShell.Navbar bg={"transparent"} withBorder={false}>
          {navbar}
        </AppShell.Navbar>
      )} */}

      <AppShell.Main bg={"transparent"}>{main}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
