import "./styles/global.scss";
import { ThemeProvider } from "./context/theme";
import { BrowserRouter } from "react-router-dom";
import { Banner } from "./components/banner";
import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Banner />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
