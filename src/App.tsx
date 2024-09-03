import { MantineProvider } from "@pansophictech/base";
import { theme } from "./theme";
import { ModalsProvider } from "@pansophictech/modals";
import RootApp from "./RootApp";
import "@pansophictech/base/styles.layer.css";

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
        <RootApp />
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
