import "./styles/global.scss";
import { ThemeProvider } from "./context/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
