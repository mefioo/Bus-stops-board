import React from "react";
import Navigation from "../Navigation/Navigation";
import TimetableViewContent from "./TimetableViewContent";

const TimetableContent = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <Navigation />
      <TimetableViewContent />
    </div>
  );
};

export default TimetableContent;
