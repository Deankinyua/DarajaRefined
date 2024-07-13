import { ThemeProvider } from "./components/theme-provider";
import RootComponent from "./AppComponents/RootComponent";
import "../src/CustomStyles/custom.css";
import "../src/CustomStyles/hamburger.css";
import "../src/CustomStyles/about.css";
import "../src/CustomStyles/home.css";
import "../src/CustomStyles/imageSlider.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="wrapper">
        <RootComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
