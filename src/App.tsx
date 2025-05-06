import { BrowserRouter } from "react-router-dom";
import MainView from "./views/MainView";

function App() {
  return (
    <BrowserRouter>
      <MainView />
    </BrowserRouter>
  );
}

export default App;
