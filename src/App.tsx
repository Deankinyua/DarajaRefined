import { ThemeProvider } from "./components/theme-provider";
import RootComponent from "./AppComponents/RootComponent";
import "../src/CustomStyles/custom.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="wrapper">
        <RootComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
