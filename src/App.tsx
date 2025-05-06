import { BrowserRouter } from "react-router-dom";
import MainView from "./views/MainView";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <MainView />
    </BrowserRouter>
  );
}

export default App;
