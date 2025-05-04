import { BrowserRouter } from "react-router-dom";
import Header from "./components/Timetable/Header";
import TimetableContent from "./components/Timetable/TimetableContent";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column gap-4">
        <Header />
        <TimetableContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
