import "./styles/global.scss";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <ThemeProvider>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
