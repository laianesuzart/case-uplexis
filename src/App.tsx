import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme";
import { DetailsProvider } from "./context/details";
import { Banner } from "./components/banner";
import { SwitchTheme } from "./components/switchTheme";
import { Router } from "./routes";
import "./styles/global.scss";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DetailsProvider>
          <Banner />
          <SwitchTheme />
          <Router />
        </DetailsProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
