import Header from "@/components/Timetable/Header";
import TimetableContent from "@/components/Timetable/TimetableContent";
import React from "react";

const MainView = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <Header />
      <TimetableContent />
    </div>
  );
};

export default MainView;
