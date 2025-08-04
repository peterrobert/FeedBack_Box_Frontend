import { BrowserRouter } from "react-router-dom";
import AppNavBar from "./Components/AppNavBar";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppNavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
