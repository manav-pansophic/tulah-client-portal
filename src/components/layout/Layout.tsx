import { AppShell, Burger } from "@pansophictech/base";
import { useDisclosure } from "@pansophictech/base";
import { ReactNode } from "react";
import "./layout.css";

interface LayoutProps {
  header?: ReactNode;
  main: ReactNode;
  aside?: ReactNode;
  navbar?: ReactNode;
}

const Layout = ({ header, navbar, main, aside }: LayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  const appShellProps = {
    ...(header && { header: { height: 100 } }),
    // ...(navbar && {
    //   navbar: { width: 300, breakpoint: "sm", collapsed: { mobile: !opened } },
    // }),
    ...(aside && { aside: { width: 420, breakpoint: "sm" } }),
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

      <AppShell.Main>{main}</AppShell.Main>

      {aside && (
        <AppShell.Aside
          h={
            "calc(100vh - var(--app-shell-header-offset, 0rem) - var(--app-shell-footer-offset, 0rem))"
          }
          bg={"transparent"}
          pb={"xs"}
          mr={"xs"}
        >
          {aside}
        </AppShell.Aside>
      )}
    </AppShell>
  );
};

export default Layout;
