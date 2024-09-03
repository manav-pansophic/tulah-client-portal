import { MantineProvider } from "@pansophictech/base";
import { theme } from "./theme";
import { ModalsProvider } from "@pansophictech/modals";
import "@pansophictech/base/styles.layer.css";
import { AppRoutes } from "./routing/AppRoutes";
import "./components/layout/layout.css";
import "@pansophictech/dates/styles.layer.css";

function App() {
  return (
    <MantineProvider
      theme={theme}
      withCssVariables
      classNamesPrefix="tulah"
      deduplicateCssVariables
      withGlobalClasses
      withStaticClasses
    >
      <ModalsProvider>
        <AppRoutes />
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
